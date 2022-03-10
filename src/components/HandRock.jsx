const HandRock = ({ right }) => {
  const classname = right ? 'image image-right' : 'image'
  return (
    <svg
      className={classname}
      width="256"
      height="255"
      viewBox="0 0 256 255"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_6)">
        <path d="M209.989 121.292C212.847 107.297 204.064 94.3494 191.288 90.8642C191.784 75.7142 179.343 63.4599 164.363 63.9277C159.356 45.4871 136.082 38.1599 121.735 51.5317C112.945 37.3517 93.1969 34.8031 81.4066 46.5934L67.2485 60.7515C59.1094 68.8906 54.9 80.1998 55.7004 91.7792L58.8399 137.22C58.9766 139.197 58.2276 139.378 51.4336 146.172C47.0402 150.566 47.0402 157.689 51.4336 162.082L114.079 224.727C118.472 229.121 125.595 229.121 129.989 224.727C135.834 218.882 137.379 216.832 141.511 215.184L176.934 201.059C181.973 199.05 186.468 196.09 190.296 192.263L218.745 163.813C231.881 150.678 227.284 128.27 209.989 121.292ZM178.363 180.33C176.175 182.522 173.561 184.242 170.683 185.384L135.261 199.509C130.935 201.235 127.077 203.775 123.793 207.058L122.034 208.817L67.3435 154.127L69.9005 151.57C73.97 147.501 76.0748 141.846 75.6746 136.056L72.5349 90.6161C72.0715 83.9071 74.494 77.3708 79.1812 72.6836L93.3393 58.5256C101.595 50.2703 114.603 63.1153 106.098 71.6206L95.8488 81.8696C95.2803 82.4382 94.8402 83.122 94.5583 83.875C94.2764 84.628 94.1592 85.4327 94.2146 86.2349L94.4396 89.4902C94.514 90.5671 94.8967 91.5999 95.542 92.4652C96.1873 93.3306 97.068 93.9919 98.079 94.3704C99.0899 94.7489 100.188 94.8285 101.243 94.5997C102.298 94.3709 103.265 93.8434 104.029 93.0801L133.007 64.1012C141.235 55.8736 154.318 68.6443 145.766 77.1963L139.116 83.8464C136.919 86.043 136.919 89.6048 139.116 91.8014L140.856 93.5415C143.053 95.7381 146.614 95.7381 148.811 93.5415L159.039 83.3137C167.276 75.0768 180.337 87.8691 171.797 96.4088L161.738 106.468C159.541 108.665 159.541 112.226 161.738 114.423L163.478 116.163C165.675 118.36 169.236 118.36 171.433 116.163L178.251 109.345C186.462 101.134 199.576 113.874 191.01 122.44L184.36 129.09C182.163 131.287 182.163 134.848 184.36 137.045L186.1 138.785C188.297 140.982 191.858 140.982 194.055 138.785C202.295 130.545 215.338 143.356 206.813 151.88L178.363 180.33Z" />
      </g>
      <defs>
        <clipPath id="clip0_2_6">
          <rect
            width="180"
            height="180"
            fill="white"
            transform="translate(128) rotate(45)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default HandRock
