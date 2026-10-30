"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import styles from "@/app/page.module.css";

type Props = {
  crop: StaticImageData;
  caption: string;
  full?: { src: StaticImageData; alt: string };
  sizes: string;
  priority?: boolean;
};

/** A cropped screenshot with its caption. Clicking it opens the whole screen in a dialog. */
export default function ZoomShot({ crop, caption, full, sizes, priority }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const big = full ?? { src: crop, alt: caption };

  return (
    <figure className={styles.attach}>
      <button type="button" className={styles.zoomButton} onClick={() => dialog.current?.showModal()} aria-label={`Enlarge screenshot: ${caption}`}>
        <Image src={crop} alt="" sizes={sizes} quality={90} placeholder="blur" priority={priority} className={styles.attachImg} />
        <span className={styles.zoomHint} aria-hidden="true">
          <svg viewBox="0 0 16 16">
            <path d="M9.5 2.5h4v4M13.5 2.5 9 7M6.5 13.5h-4v-4M2.5 13.5 7 9" />
          </svg>
          Enlarge
        </span>
      </button>
      <figcaption className={styles.attachCap}>{caption}</figcaption>

      <dialog
        ref={dialog}
        className={styles.lightbox}
        aria-label="Screenshot"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div className={styles.lightboxInner}>
          <Image src={big.src} alt={big.alt} sizes="(max-width: 1400px) 100vw, 1400px" quality={90} className={styles.lightboxImg} />
          <div className={styles.lightboxBar}>
            <p>{caption}</p>
            <button type="button" className={styles.btnGhost} onClick={() => dialog.current?.close()}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </figure>
  );
}
