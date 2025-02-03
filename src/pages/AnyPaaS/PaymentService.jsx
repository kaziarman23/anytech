import ServiceSection from "../../components/ServiceSection";

const PaymentService = () => {
  const SvgIcons = [
    {
      bottom: 0,
      right: 0,
      width: 229,
      animation:"true",
      height: 229,
      viewBox: "0 0 229 229",
      SvgClass: "-z-10",
      content: (
        <>
          <path
            d="M229 168.016V0L0 229H168.016L229 168.016Z"
            fill="url(#paint0_linear_6237_24709)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6237_24709"
              x1="8.41232e-05"
              y1="229"
              x2="203.462"
              y2="11.5062"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA" />
              <stop offset="1" stopColor="#0D7DFE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </>
      ),
    },
    {
      top: 0,
      left: 0,
      width: 320,
      animation:"true",
      height: 320,
      viewBox: "0 0 320 320",
      SvgClass: "-z-10",
      content: (
        <>
          <path
            d="M-9.99228e-06 85.2179L-3.05176e-05 320L320 3.05176e-05L85.2177 9.99226e-06L-9.99228e-06 85.2179Z"
            fill="url(#paint0_linear_6490_16105)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6490_16105"
              x1="320"
              y1="-0.000113419"
              x2="35.6863"
              y2="303.922"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E9EA" />
              <stop offset="1" stopColor="#0D7DFE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </>
      ),
    },
    {
      top: 20,
      left: 70,
      width: 208,
      animation:"true",
      height: 233,
      viewBox: "0 0 208 233",
      content: (
        <>
          <g filter="url(#filter0_d_6711_20534)">
            <ellipse
              style={{ mixBlendMode: "multiply" }}
              fill="url(#paint0_linear_6711_20534)"
              transform="matrix(0.864942 0.501871 -0.498131 0.867102 77.2031 0)"
              ry="73.4798"
              rx="73.2968"
              cy="73.4798"
              cx="73.2968"
            />
            <ellipse
              fill="url(#paint1_linear_6711_20534)"
              transform="matrix(0.864942 0.501871 -0.498131 0.867102 77.2031 0)"
              ry="73.4798"
              rx="73.2968"
              cy="73.4798"
              cx="73.2968"
            />
            <ellipse
              fill="white"
              ry="53.2851"
              rx="53.02"
              cy="96.9787"
              cx="103.836"
            />
            <path
              fill="#0B305B"
              d="M128 80.5C128 82.2812 126.594 83.7812 124.344 85C121.625 86.5938 117.594 87.625 112.906 87.9062C112.531 87.8125 112.156 87.625 111.875 87.4375C108.125 85.9375 103.25 85 98 85C97.1562 85 96.4062 85.0938 95.6562 85.0938L95.5625 85C93.3125 83.7812 92 82.2812 92 80.5C92 76.375 99.9688 73 110 73C119.938 73 128 76.375 128 80.5ZM95 88.1875C95.9375 88.0938 96.9688 88 98 88C103.812 88 108.969 89.2188 112.25 91C114.594 92.2188 116 93.8125 116 95.5C116 95.875 115.906 96.25 115.719 96.625C115.344 97.8438 114.125 98.9688 112.438 100H112.344C109.062 101.875 103.812 103 98 103C92.375 103 87.4062 101.969 84.0312 100.281C83.8438 100.188 83.75 100.094 83.5625 100C81.3125 98.7812 80 97.1875 80 95.5C80 92.3125 84.9688 89.5 92 88.4688C92.9375 88.2812 93.9688 88.1875 95 88.1875ZM116.656 90.5312C119.375 90.1562 121.812 89.5 123.875 88.6562C125.375 88 126.781 87.1562 128 86.2188V89.5C128 91.375 126.406 93.0625 123.875 94.2812C122.469 95.0312 120.781 95.5938 118.906 96.0625C118.906 95.875 119 95.6875 119 95.5C119 93.5312 117.969 91.8438 116.656 90.5312ZM116 104.5C116 106.188 114.594 107.781 112.344 109C112.156 109.094 112.062 109.188 111.875 109.281C108.5 110.969 103.531 112 98 112C92.0938 112 86.8438 110.875 83.5625 109C81.3125 107.781 80 106.188 80 104.5V101.219C81.125 102.156 82.5312 103 84.0312 103.656C87.7812 105.156 92.6562 106 98 106C103.25 106 108.125 105.156 111.875 103.656C112.531 103.281 113.281 103 113.938 102.625C114.5 102.25 115.062 101.875 115.531 101.5C115.719 101.406 115.812 101.312 116 101.219V104.5ZM119 99.1562C120.688 98.6875 122.375 98.2188 123.875 97.6562C125.375 97 126.781 96.1562 128 95.2188V98.5C128 99.5312 127.531 100.469 126.594 101.406C125 103 122.375 104.219 118.906 105.062C118.906 104.875 119 104.688 119 104.5V99.1562ZM98 115C103.25 115 108.125 114.156 111.875 112.656C113.375 112 114.781 111.156 116 110.219V113.5C116 117.719 107.938 121 98 121C87.9688 121 80 117.719 80 113.5V110.219C81.125 111.156 82.5312 112 84.0312 112.656C87.7812 114.156 92.6562 115 98 115Z"
            />
            <path
              fill="url(#paint2_radial_6711_20534)"
              d="M128 80.5C128 82.2812 126.594 83.7812 124.344 85C121.625 86.5938 117.594 87.625 112.906 87.9062C112.531 87.8125 112.156 87.625 111.875 87.4375C108.125 85.9375 103.25 85 98 85C97.1562 85 96.4062 85.0938 95.6562 85.0938L95.5625 85C93.3125 83.7812 92 82.2812 92 80.5C92 76.375 99.9688 73 110 73C119.938 73 128 76.375 128 80.5ZM95 88.1875C95.9375 88.0938 96.9688 88 98 88C103.812 88 108.969 89.2188 112.25 91C114.594 92.2188 116 93.8125 116 95.5C116 95.875 115.906 96.25 115.719 96.625C115.344 97.8438 114.125 98.9688 112.438 100H112.344C109.062 101.875 103.812 103 98 103C92.375 103 87.4062 101.969 84.0312 100.281C83.8438 100.188 83.75 100.094 83.5625 100C81.3125 98.7812 80 97.1875 80 95.5C80 92.3125 84.9688 89.5 92 88.4688C92.9375 88.2812 93.9688 88.1875 95 88.1875ZM116.656 90.5312C119.375 90.1562 121.812 89.5 123.875 88.6562C125.375 88 126.781 87.1562 128 86.2188V89.5C128 91.375 126.406 93.0625 123.875 94.2812C122.469 95.0312 120.781 95.5938 118.906 96.0625C118.906 95.875 119 95.6875 119 95.5C119 93.5312 117.969 91.8438 116.656 90.5312ZM116 104.5C116 106.188 114.594 107.781 112.344 109C112.156 109.094 112.062 109.188 111.875 109.281C108.5 110.969 103.531 112 98 112C92.0938 112 86.8438 110.875 83.5625 109C81.3125 107.781 80 106.188 80 104.5V101.219C81.125 102.156 82.5312 103 84.0312 103.656C87.7812 105.156 92.6562 106 98 106C103.25 106 108.125 105.156 111.875 103.656C112.531 103.281 113.281 103 113.938 102.625C114.5 102.25 115.062 101.875 115.531 101.5C115.719 101.406 115.812 101.312 116 101.219V104.5ZM119 99.1562C120.688 98.6875 122.375 98.2188 123.875 97.6562C125.375 97 126.781 96.1562 128 95.2188V98.5C128 99.5312 127.531 100.469 126.594 101.406C125 103 122.375 104.219 118.906 105.062C118.906 104.875 119 104.688 119 104.5V99.1562ZM98 115C103.25 115 108.125 114.156 111.875 112.656C113.375 112 114.781 111.156 116 110.219V113.5C116 117.719 107.938 121 98 121C87.9688 121 80 117.719 80 113.5V110.219C81.125 111.156 82.5312 112 84.0312 112.656C87.7812 114.156 92.6562 115 98 115Z"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="261"
              width="260"
              y="-2"
              x="-26"
              id="filter0_d_6711_20534"
            >
              <feFlood result="BackgroundImageFix" floodOpacity="0" />
              <feColorMatrix
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                type="matrix"
                in="SourceAlpha"
              />
              <feOffset dy="28" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite operator="out" in2="hardAlpha" />
              <feColorMatrix
                values="0 0 0 0 0.0862745 0 0 0 0 0.262745 0 0 0 0 0.466667 0 0 0 0.22 0"
                type="matrix"
              />
              <feBlend
                result="effect1_dropShadow_6711_20534"
                in2="BackgroundImageFix"
                mode="multiply"
              />
              <feBlend
                result="shape"
                in2="effect1_dropShadow_6711_20534"
                in="SourceGraphic"
                mode="normal"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="243.853"
              x2="73.2967"
              y1="0"
              x1="73.2967"
              id="paint0_linear_6711_20534"
            >
              <stop stopColor="#F0FAFF" />
              <stop stopOpacity="0" stopColor="#F0FAFF" offset="1" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="88.2248"
              x2="194.267"
              y1="-29.0107"
              x1="125.839"
              id="paint1_linear_6711_20534"
            >
              <stop stopColor="#00E9EA" />
              <stop stopOpacity="0" stopColor="#1F80F0" offset="1" />
            </linearGradient>
            <radialGradient
              gradientTransform="translate(79.5 129) rotate(-48.7806) scale(80.4317 127.278)"
              gradientUnits="userSpaceOnUse"
              r="1"
              cy="0"
              cx="0"
              id="paint2_radial_6711_20534"
            >
              <stop stopColor="#00E9EA" />
              <stop stopColor="#1F80F0" offset="0.520833" />
              <stop stopColor="#014AB8" offset="1" />
            </radialGradient>
          </defs>
        </>
      ),
    },
    {
      top: 50,
      left: 0,
      width: 160,
      height: 175,
      animation:"true",
      viewBox: "0 0 160 175",
      content: (
        <>
          <g filter="url(#filter0_d_6711_20541)">
            <ellipse
              style={{ mixBlendMode: "multiply" }}
              fill="url(#paint0_linear_6711_20541)"
              transform="matrix(0.864408 0.502791 -0.497215 0.867628 62.0469 0)"
              ry="49.3222"
              rx="49.1392"
              cy="49.3222"
              cx="49.1392"
            />
            <ellipse
              fill="url(#paint1_linear_6711_20541)"
              transform="matrix(0.864408 0.502791 -0.497215 0.867628 62.0469 0)"
              ry="49.3222"
              rx="49.1392"
              cy="49.3222"
              cx="49.1392"
            />
            <ellipse
              fill="white"
              ry="35.7885"
              rx="35.5234"
              cy="68.0273"
              cx="79.8906"
            />
            <path
              fill="#0B305B"
              d="M82 52C83.0625 52 84 52.9375 84 54V58C84 59.125 83.0625 60 82 60H77V62H90.5C92.5 62 94.1875 63.5 94.5 65.4375L95.875 74.8125C95.9375 75.0625 96 75.375 96 75.6875V80C96 82.25 94.1875 84 92 84H68C65.75 84 64 82.25 64 80V75.6875C64 75.375 64 75.0625 64.0625 74.8125L65.4375 65.4375C65.75 63.5 67.4375 62 69.4375 62H72.9375V60H67.9375C66.875 60 65.9375 59.125 65.9375 58V54C65.9375 52.9375 66.875 52 67.9375 52H82ZM70 55C69.4375 55 69 55.5 69 56C69 56.5625 69.4375 57 70 57H80C80.5 57 81 56.5625 81 56C81 55.5 80.5 55 80 55H70ZM69 80H91C91.5 80 92 79.5625 92 79C92 78.5 91.5 78 91 78H69C68.4375 78 68 78.5 68 79C68 79.5625 68.4375 80 69 80ZM71 65.5C70.125 65.5 69.5 66.1875 69.5 67C69.5 67.875 70.125 68.5 71 68.5C71.8125 68.5 72.5 67.875 72.5 67C72.5 66.1875 71.8125 65.5 71 65.5ZM77 68.5C77.8125 68.5 78.5 67.875 78.5 67C78.5 66.1875 77.8125 65.5 77 65.5C76.125 65.5 75.5 66.1875 75.5 67C75.5 67.875 76.125 68.5 77 68.5ZM74 70.5C73.125 70.5 72.5 71.1875 72.5 72C72.5 72.875 73.125 73.5 74 73.5C74.8125 73.5 75.5 72.875 75.5 72C75.5 71.1875 74.8125 70.5 74 70.5ZM83 68.5C83.8125 68.5 84.5 67.875 84.5 67C84.5 66.1875 83.8125 65.5 83 65.5C82.125 65.5 81.5 66.1875 81.5 67C81.5 67.875 82.125 68.5 83 68.5ZM80 70.5C79.125 70.5 78.5 71.1875 78.5 72C78.5 72.875 79.125 73.5 80 73.5C80.8125 73.5 81.5 72.875 81.5 72C81.5 71.1875 80.8125 70.5 80 70.5ZM89 68.5C89.8125 68.5 90.5 67.875 90.5 67C90.5 66.1875 89.8125 65.5 89 65.5C88.125 65.5 87.5 66.1875 87.5 67C87.5 67.875 88.125 68.5 89 68.5ZM86 70.5C85.125 70.5 84.5 71.1875 84.5 72C84.5 72.875 85.125 73.5 86 73.5C86.8125 73.5 87.5 72.875 87.5 72C87.5 71.1875 86.8125 70.5 86 70.5Z"
            />
            <path
              fill="url(#paint2_linear_6711_20541)"
              d="M82 52C83.0625 52 84 52.9375 84 54V58C84 59.125 83.0625 60 82 60H77V62H90.5C92.5 62 94.1875 63.5 94.5 65.4375L95.875 74.8125C95.9375 75.0625 96 75.375 96 75.6875V80C96 82.25 94.1875 84 92 84H68C65.75 84 64 82.25 64 80V75.6875C64 75.375 64 75.0625 64.0625 74.8125L65.4375 65.4375C65.75 63.5 67.4375 62 69.4375 62H72.9375V60H67.9375C66.875 60 65.9375 59.125 65.9375 58V54C65.9375 52.9375 66.875 52 67.9375 52H82ZM70 55C69.4375 55 69 55.5 69 56C69 56.5625 69.4375 57 70 57H80C80.5 57 81 56.5625 81 56C81 55.5 80.5 55 80 55H70ZM69 80H91C91.5 80 92 79.5625 92 79C92 78.5 91.5 78 91 78H69C68.4375 78 68 78.5 68 79C68 79.5625 68.4375 80 69 80ZM71 65.5C70.125 65.5 69.5 66.1875 69.5 67C69.5 67.875 70.125 68.5 71 68.5C71.8125 68.5 72.5 67.875 72.5 67C72.5 66.1875 71.8125 65.5 71 65.5ZM77 68.5C77.8125 68.5 78.5 67.875 78.5 67C78.5 66.1875 77.8125 65.5 77 65.5C76.125 65.5 75.5 66.1875 75.5 67C75.5 67.875 76.125 68.5 77 68.5ZM74 70.5C73.125 70.5 72.5 71.1875 72.5 72C72.5 72.875 73.125 73.5 74 73.5C74.8125 73.5 75.5 72.875 75.5 72C75.5 71.1875 74.8125 70.5 74 70.5ZM83 68.5C83.8125 68.5 84.5 67.875 84.5 67C84.5 66.1875 83.8125 65.5 83 65.5C82.125 65.5 81.5 66.1875 81.5 67C81.5 67.875 82.125 68.5 83 68.5ZM80 70.5C79.125 70.5 78.5 71.1875 78.5 72C78.5 72.875 79.125 73.5 80 73.5C80.8125 73.5 81.5 72.875 81.5 72C81.5 71.1875 80.8125 70.5 80 70.5ZM89 68.5C89.8125 68.5 90.5 67.875 90.5 67C90.5 66.1875 89.8125 65.5 89 65.5C88.125 65.5 87.5 66.1875 87.5 67C87.5 67.875 88.125 68.5 89 68.5ZM86 70.5C85.125 70.5 84.5 71.1875 84.5 72C84.5 72.875 85.125 73.5 86 73.5C86.8125 73.5 87.5 72.875 87.5 72C87.5 71.1875 86.8125 70.5 86 70.5Z"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="195"
              width="194"
              y="-2"
              x="-17"
              id="filter0_d_6711_20541"
            >
              <feFlood result="BackgroundImageFix" floodOpacity="0" />
              <feColorMatrix
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                type="matrix"
                in="SourceAlpha"
              />
              <feOffset dy="28" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite operator="out" in2="hardAlpha" />
              <feColorMatrix
                values="0 0 0 0 0.0862745 0 0 0 0 0.262745 0 0 0 0 0.466667 0 0 0 0.22 0"
                type="matrix"
              />
              <feBlend
                result="effect1_dropShadow_6711_20541"
                in2="BackgroundImageFix"
                mode="multiply"
              />
              <feBlend
                result="shape"
                in2="effect1_dropShadow_6711_20541"
                in="SourceGraphic"
                mode="normal"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="163.683"
              x2="49.1392"
              y1="0"
              x1="49.1392"
              id="paint0_linear_6711_20541"
            >
              <stop stopColor="#F0FAFF" />
              <stop stopOpacity="0" stopColor="#F0FAFF" offset="1" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="0.416703"
              x2="85.2135"
              y1="88.6538"
              x1="71.7625"
              id="paint1_linear_6711_20541"
            >
              <stop stopOpacity="0" stopColor="#1F80F0" />
              <stop stopColor="#014AB8" offset="1" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="69.8553"
              x2="105.372"
              y1="100"
              x1="80"
              id="paint2_linear_6711_20541"
            >
              <stop stopColor="#00E9EA" />
              <stop stopColor="#1F80F0" offset="0.520833" />
              <stop stopColor="#014AB8" offset="1" />
            </linearGradient>
          </defs>
        </>
      ),
    },
  ];

  return (
    <div className="w-full h-full">
      <ServiceSection
        title={"anypaas"}
        titleColor={"text-[#00DFE0]"}
        heading={"The future of payment services"}
        description={
          "AnyTech’s innovative Payment-as-a-Service (PaaS) solution provides an agile, scalable, and secure infrastructure for facilitating and managing all types of digital transactions."
        }
        secondDescription={
          "With AnyPaaS, you can significantly enhance your payment processing capabilities, drive operational efficiency, and deliver superior customer experiences in the digital age. Embrace the future of payment services with AnyPaaS. Streamline your payment processes, mitigate risks, and delight your customers with seamless and secure payment experiences."
        }
        image={
          "https://cdn.sanity.io/images/6jywt20u/production/7a5727c1791a6c44605549858656bcc196ad6c55-375x455.png?w=375&auto=format"
        }
        svgs={SvgIcons}
      />
      <svg
        className="undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M-240 0L1680 0L-240 280L-240 0Z"
          fill="url(#paint0_linear_6055_471)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_6055_471"
            x1="458.5"
            y1="1561.14"
            x2="392.705"
            y2="52.1879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F80F0"></stop>
            <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default PaymentService;
