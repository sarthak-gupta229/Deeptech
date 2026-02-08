import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;
const FRAME_PATH = (index) =>
  `/sequence/ezgif-frame-${String(index).padStart(3, "0")}.png`;

const ChipScroll = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // Constants for watermark removal
  const CROP_BOTTOM_FACTOR = 0.08; // Crop bottom 8% to remove watermark

  // Use a ref to store the images so we don't trigger re-renders
  const imagesRef = useRef([]);
  // Keep track of the current frame index for redraws
  const frameRef = useRef({ index: 0 });

  // 1. Preload Images
  useEffect(() => {
    let mounted = true;
    const images = [];
    let loadedCount = 0;

    const loadImages = async () => {
      const promises = [];

      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const promise = new Promise((resolve, reject) => {
          img.onload = () => {
            if (!mounted) return;
            loadedCount++;
            setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
            resolve();
          };
          img.onerror = () => {
            console.warn(`Failed to load frame ${i}`);
            // Resolve anyway to avoid blocking the whole app
            resolve();
          };
        });

        img.src = FRAME_PATH(i);
        images.push(img);
        promises.push(promise);
      }

      await Promise.all(promises);

      if (mounted) {
        imagesRef.current = images;
        setIsLoading(false);
      }
    };

    loadImages();

    return () => {
      mounted = false;
    };
  }, []);

  // 2. Setup Animation & Canvas Drawing
  useEffect(() => {
    if (
      isLoading ||
      !canvasRef.current ||
      !containerRef.current ||
      imagesRef.current.length === 0
    )
      return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { alpha: false }); // Optimization: alpha false if bg is opaque

    // Initial draw function
    const drawFrame = (index) => {
      // Clamp index validation
      const safeIndex = Math.min(
        Math.max(Math.round(index), 0),
        TOTAL_FRAMES - 1,
      );

      const img = imagesRef.current[safeIndex];
      if (!img || !img.complete) return;

      // Handle high-DPI scaling
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      // Update canvas resolution if needed (optimization: only on resize)
      if (
        canvas.width !== rect.width * dpr ||
        canvas.height !== rect.height * dpr
      ) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        // Reset scale because changing size resets context state
        // We will specificially not use context.scale(dpr, dpr) here so we can do custom object-fit math
      }

      // Clear canvas
      // Clear canvas with black background to match dark sequence
      context.fillStyle = "#000000";
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Custom cropping logic to remove watermark
      const iw = img.naturalWidth;
      const originalIh = img.naturalHeight;

      // Calculate cropped dimensions (source)
      // We crop from the bottom to remove the watermark
      const cropHeight = Math.floor(originalIh * CROP_BOTTOM_FACTOR);
      const sh = originalIh - cropHeight;
      const sw = iw;

      // Calculate destination dimensions to maintain aspect ratio of the CROPPED image
      const cw = canvas.width;
      const ch = canvas.height;

      // Use Math.max to simulate 'object-fit: cover'
      // This ensures the image fills the entire canvas area, preventing black bars
      // at the cost of cropping the edges of the image.
      const scale = Math.max(cw / sw, ch / sh);

      const nw = sw * scale;
      const nh = sh * scale;
      const nx = (cw - nw) / 2;
      const ny = (ch - nh) / 2;

      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";

      // Draw cropped image:
      // source(x, y, w, h) -> destination(x, y, w, h)
      context.drawImage(img, 0, 0, sw, sh, nx, ny, nw, nh);
    };

    // Initial draw
    drawFrame(0);

    // Setup ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: canvas, // Clean pinning
      scrub: 1.5, // Increased damping for smoother playback
      onUpdate: (self) => {
        const frameIndex = self.progress * (TOTAL_FRAMES - 1);
        drawFrame(frameIndex);
        frameRef.current.index = frameIndex;
      },
    });

    // Handle resizing
    const handleResize = () => {
      // Force a redraw of the current frame on resize
      drawFrame(frameRef.current.index);
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      trigger.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoading]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300vh] md:h-[600vh] bg-black"
      style={{ isolation: "isolate" }}
    >
      {/* Loading State Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white h-screen sticky top-0">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#CC0033] border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">
              Initializing... {loadProgress}%
            </span>
          </div>
        </div>
      )}

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className={`w-full h-screen block sticky top-0 transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        // touch-action: pan-y ensures the browser handles vertical scrolling naturally
        // while we just observe the scroll position for the animation
        style={{ touchAction: "pan-y" }}
      />
    </div>
  );
};

export default ChipScroll;
