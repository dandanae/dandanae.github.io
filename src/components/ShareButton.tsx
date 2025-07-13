'use client'
import React, { useEffect, useRef } from 'react'

const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

declare global {
  interface Window {
    Kakao: any
  }
}

const ShareButton = ({ javascriptKey }: { javascriptKey: string }) => {
  const containerRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!window.Kakao) return

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(javascriptKey)
    }

    if (containerRef.current) {
      window.Kakao.Share.createScrapButton({
        container: containerRef.current,
        requestUrl: shareUrl,
      })
    }
  }, [javascriptKey, shareUrl])

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`
    window.open(url, '_blank')
  }

  const handleCopyLink = async () => {
    try {
      await window.navigator.clipboard.writeText(shareUrl)
      window.alert('링크가 복사되었습니다.')
    } catch {
      window.alert('복사에 실패했습니다.')
    }
  }

  return (
    <div className="mb-8 flex items-center justify-end space-x-2">
      <button
        type="button"
        onClick={handleTwitterShare}
        className="w-12 cursor-pointer transition-all duration-300 hover:-translate-y-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 512 509.64"
        >
          <rect width="512" height="509.64" rx="115.61" ry="115.61" />
          <path
            fill="#fff"
            fill-rule="nonzero"
            d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"
          />
        </svg>
      </button>

      <a
        href="javascript:;"
        ref={containerRef}
        id="kakaotalk-sharing-btn"
        aria-label="카카오톡 공유 버튼"
        className="w-12 cursor-pointer transition-all duration-300 hover:-translate-y-2"
      >
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
          alt="카카오톡 공유 보내기 버튼"
        />
      </a>

      <button
        type="button"
        onClick={handleCopyLink}
        className="w-12 cursor-pointer transition-all duration-300 hover:-translate-y-2"
      >
        공유
      </button>
      {/* <button
        type="button"
        onClick={handleTwitterShare}
        className="w-12 cursor-pointer transition-all duration-300 hover:-translate-y-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 512 512"
        >
          <path
            fill="#5865F2"
            d="M105 0h302c57.928.155 104.845 47.072 105 104.996V407c-.155 57.926-47.072 104.844-104.996 104.998L105 512C47.074 511.844.156 464.926.002 407.003L0 105C.156 47.072 47.074.155 104.997 0H105z"
          />
          <g data-name="å¾å± 2">
            <g data-name="Discord Logos">
              <path
                fill="#fff"
                fill-rule="nonzero"
                d="M368.896 153.381a269.506 269.506 0 00-67.118-20.637 186.88 186.88 0 00-8.57 17.475 250.337 250.337 0 00-37.247-2.8c-12.447 0-24.955.946-37.25 2.776-2.511-5.927-5.427-11.804-8.592-17.454a271.73 271.73 0 00-67.133 20.681c-42.479 62.841-53.991 124.112-48.235 184.513a270.622 270.622 0 0082.308 41.312c6.637-8.959 12.582-18.497 17.63-28.423a173.808 173.808 0 01-27.772-13.253c2.328-1.688 4.605-3.427 6.805-5.117 25.726 12.083 53.836 18.385 82.277 18.385 28.442 0 56.551-6.302 82.279-18.387 2.226 1.817 4.503 3.557 6.805 5.117a175.002 175.002 0 01-27.823 13.289 197.847 197.847 0 0017.631 28.4 269.513 269.513 0 0082.363-41.305l-.007.007c6.754-70.045-11.538-130.753-48.351-184.579zM201.968 300.789c-16.04 0-29.292-14.557-29.292-32.465s12.791-32.592 29.241-32.592 29.599 14.684 29.318 32.592c-.282 17.908-12.919 32.465-29.267 32.465zm108.062 0c-16.066 0-29.267-14.557-29.267-32.465s12.791-32.592 29.267-32.592c16.475 0 29.522 14.684 29.241 32.592-.281 17.908-12.894 32.465-29.241 32.465z"
                data-name="Discord Logo - Large - White"
              />
            </g>
          </g>
        </svg>
      </button> */}
    </div>
  )
}

export default ShareButton
