export default function WigglyLine2({ ...props }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="917"
        height="925"
        viewBox="0 0 917 925"
        fill="none"
        {...props}
      >
        <path
          opacity="0.2"
          d="M419.186 277.017C402.807 289.901 380.647 296.344 350.779 296.344C316.093 296.344 277.072 287.754 242.387 280.238C222.154 275.943 202.885 271.648 187.469 269.501C179.761 268.427 159.046 266.28 133.996 266.28C87.2669 266.28 27.0493 273.259 6.81618 307.081C-1.85514 321.576 -2.33687 340.366 5.85272 361.84C9.70664 372.04 19.3415 377.409 28.9763 382.777C36.6841 387.072 44.392 391.367 48.7277 397.809C54.0268 405.325 56.9172 416.599 59.8076 426.799C63.6615 440.757 67.5155 455.252 76.6685 463.842C87.7486 474.579 100.274 479.411 115.69 479.411C126.288 479.411 137.368 477.263 147.966 474.579C158.564 472.432 169.163 469.748 179.279 469.748C189.396 469.748 198.067 471.895 205.775 476.727C225.045 487.464 232.752 502.496 240.942 516.991C251.059 535.781 260.693 553.497 292.488 561.55C358.487 578.729 376.793 596.982 420.631 640.467C426.412 645.836 432.193 652.278 438.937 658.72C454.835 674.289 466.397 692.005 477.477 708.648C487.593 723.68 497.71 739.785 511.198 753.744C527.578 771.46 542.993 778.976 557.927 787.028C577.678 797.229 596.948 806.892 613.809 839.64L616.699 845.009C638.378 886.346 660.056 925 673.545 925C675.472 925 677.399 923.926 678.844 922.316C683.661 916.41 685.107 900.842 682.698 874.536C681.253 858.967 671.618 845.546 661.983 832.124C651.385 817.629 641.75 804.208 642.232 789.176C642.713 771.46 652.83 762.333 662.947 753.207C670.654 746.228 678.362 739.248 682.698 728.511C693.778 702.205 696.187 678.584 699.077 655.499C702.449 623.825 705.821 593.761 731.354 559.939C777.119 499.275 841.19 453.105 911.525 430.557C935.13 423.041 956.808 419.283 978.005 419.283C1050.27 419.283 1101.81 462.768 1156.73 509.475C1162.99 514.843 1169.26 520.212 1175.52 525.044V519.675C1169.74 514.843 1164.44 510.012 1158.66 505.717C1103.26 459.01 1051.23 414.988 978.005 414.988C956.326 414.988 934.166 418.746 910.561 426.262C839.263 448.81 774.71 495.517 728.463 556.718C702.449 591.613 699.077 622.214 695.223 654.425C692.814 676.973 689.924 700.058 679.326 725.827C674.99 736.027 667.764 743.006 660.538 749.449C649.94 759.112 639.341 768.775 638.378 788.102C637.896 804.745 648.494 819.24 658.611 833.735C667.764 846.619 677.399 860.041 678.844 873.999C681.253 905.136 678.362 915.337 675.953 919.095C674.99 920.168 674.027 920.705 673.063 920.705C659.574 920.705 631.633 865.946 619.108 842.861L616.218 837.493C598.393 803.671 579.124 794.008 558.891 783.807C543.957 776.291 529.023 768.775 513.125 751.596C500.118 737.638 489.52 722.069 479.885 707.037C468.323 689.858 456.762 672.142 440.864 656.573C434.12 650.131 428.339 644.225 422.558 638.32C378.238 594.298 359.932 576.045 292.97 558.865C262.62 550.813 253.467 534.17 243.832 515.917C235.643 500.885 227.453 485.853 207.702 474.579C199.512 469.747 190.359 467.6 179.761 467.6C169.163 467.6 158.083 469.748 147.484 472.432C136.886 474.579 126.288 477.263 116.171 477.263C101.719 477.263 90.1573 472.432 79.0772 462.768C70.8876 454.716 67.0338 441.294 63.1799 427.336C60.2894 416.599 56.9172 405.325 51.618 397.272C46.8006 389.756 38.611 385.461 30.9032 381.167C21.7501 375.798 12.5971 370.966 9.22488 361.84C1.51704 341.439 1.99884 324.26 10.1884 310.302C29.458 278.091 88.7121 271.111 134.959 271.111C160.01 271.111 180.724 273.259 187.951 274.333C203.366 275.943 222.636 280.238 242.869 285.07C277.554 292.586 316.575 301.712 351.742 301.712C382.092 301.712 405.216 295.27 422.076 281.848C464.47 248.564 451.944 198.636 440.382 150.319C427.857 98.7812 414.85 45.0958 466.878 10.2002C473.141 5.9054 481.33 3.75797 491.447 3.75797C522.278 3.75797 566.117 22.5479 608.51 40.8009C645.122 56.9065 680.289 71.9385 702.931 72.4753C706.303 72.4753 709.675 72.4753 712.566 72.4753C761.221 72.4753 810.359 63.3488 858.051 54.2223C905.744 45.0958 954.881 35.9692 1003.06 35.9692C1036.78 35.9692 1067.61 40.2641 1096.51 49.9274C1123.49 58.5171 1149.99 69.791 1176 82.6756V78.3807C1149.99 65.4962 1123.97 54.7591 1097.48 46.1695C1068.09 37.0429 1037.26 32.2113 1003.06 32.2113C954.399 32.2113 905.262 41.3378 857.57 50.4643C810.359 59.5908 761.221 68.7173 712.566 68.7173C709.194 68.7173 706.303 68.7173 702.931 68.7173C680.771 68.1805 646.567 53.1486 609.955 37.5798C567.562 19.3268 523.242 0 491.447 0C480.367 0 471.696 2.14741 464.951 6.9791C410.996 43.4852 424.003 98.2443 437.01 151.393C448.09 198.636 459.17 245.342 419.186 277.017Z"
          fill="url(#paint0_linear_178_600)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_178_600"
            x1="588"
            y1="0"
            x2="588"
            y2="925"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FAFAFA" />
            <stop offset="1" stopColor="#BEACB8" stopOpacity="0.61" />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
}