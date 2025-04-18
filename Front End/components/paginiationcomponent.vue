<!-- <template>
   <div class="w-[1090px] inline-flex justify-between items-center">
     <svg
       xmlns="http://www.w3.org/2000/svg"
       width="20"
       height="21"
       viewBox="0 0 20 21"
       fill="none"
     >
       <path
         d="M2.838 9.18534C2.38733 9.636 2.38733 10.3679 2.838 10.8186L8.60654 16.5871C9.0572 17.0378 9.78909 17.0378 10.2398 16.5871C10.6904 16.1364 10.6904 15.4045 10.2398 14.9539L5.28602 10.0001L10.2361 5.04641C10.6868 4.59575 10.6868 3.86386 10.2361 3.4132C9.78548 2.96253 9.0536 2.96253 8.60293 3.4132L2.83439 9.18173L2.838 9.18534ZM15.5288 3.4168L9.76024 9.18534C9.30958 9.636 9.30958 10.3679 9.76024 10.8186L15.5288 16.5871C15.9794 17.0378 16.7113 17.0378 17.162 16.5871C17.6127 16.1364 17.6127 15.4045 17.162 14.9539L12.2083 10.0001L17.1584 5.04641C17.6091 4.59575 17.6091 3.86386 17.1584 3.4132C16.7077 2.96253 15.9758 2.96253 15.5252 3.4132L15.5288 3.4168Z"
         fill="#A31D1D"
       />
     </svg>
     <div
       class="text-[#A31D1D] text-right font-poppins text-[18px] not-italic font-medium leading-[27px] tracking-[-0.342px]"
     >
       prev
     </div>
     <div
       class="px-8 py-2 bg-red-800 rounded-full flex justify-start items-center gap-1.5"
     >
       <div
         class="text-right justify-start text-yellow-50 text-lg font-medium font-['Poppins'] leading-relaxed"
       >
         Page
       </div>
       <div
         class="w-1.5 inline-flex flex-col justify-center items-center gap-2.5"
       >
         <div
           class="text-right justify-start text-yellow-50 text-lg font-semibold font-['Poppins'] leading-relaxed"
         >
           1
         </div>
       </div>
       <div
         class="text-right justify-start text-yellow-50 text-lg font-medium font-['Poppins'] leading-relaxed"
       >
         of
       </div>
       <div class="w-4 inline-flex flex-col justify-center items-center gap-2.5">
         <div
           class="text-right justify-start text-yellow-50 text-lg font-semibold font-['Poppins'] leading-relaxed"
         >
           10
         </div>
       </div>
     </div>
     <div
       data-status="Default"
       class="px-4 py-2 flex justify-center items-center gap-2.5"
     >
       <svg
         xmlns="http://www.w3.org/2000/svg"
         width="20"
         height="21"
         viewBox="0 0 20 21"
         fill="none"
       >
         <path
           d="M17.3261 9.24989C17.7871 9.71087 17.7871 10.4595 17.3261 10.9205L11.4257 16.8209C10.9647 17.2819 10.2161 17.2819 9.7551 16.8209C9.29413 16.36 9.29413 15.6113 9.7551 15.1504L14.8221 10.0833L9.75879 5.0163C9.29781 4.55533 9.29781 3.80671 9.75879 3.34573C10.2198 2.88476 10.9684 2.88476 11.4294 3.34573L17.3298 9.2462L17.3261 9.24989ZM4.34511 3.34942L10.2456 9.24989C10.7066 9.71087 10.7066 10.4595 10.2456 10.9205L4.34511 16.8209C3.88413 17.2819 3.13551 17.2819 2.67453 16.8209C2.21356 16.36 2.21356 15.6113 2.67453 15.1504L7.74156 10.0833L2.67822 5.0163C2.21725 4.55533 2.21725 3.80671 2.67822 3.34573C3.1392 2.88476 3.88782 2.88476 4.34879 3.34573L4.34511 3.34942Z"
           fill="#A31D1D"
         />
       </svg>
 
       <div
         class="text-[#A31D1D] text-right font-poppins text-[18px] not-italic font-medium leading-[27px] tracking-[-0.342px]"
       >
         Next
       </div>
     </div>
   </div>
 </template> -->

<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="w-[1090px] flex justify-between items-center">
      <!-- Prev Button -->
      <div class="flex items-center gap-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M2.838 9.18534C2.38733 9.636 2.38733 10.3679 2.838 10.8186L8.60654 16.5871C9.0572 17.0378 9.78909 17.0378 10.2398 16.5871C10.6904 16.1364 10.6904 15.4045 10.2398 14.9539L5.28602 10.0001L10.2361 5.04641C10.6868 4.59575 10.6868 3.86386 10.2361 3.4132C9.78548 2.96253 9.0536 2.96253 8.60293 3.4132L2.83439 9.18173L2.838 9.18534ZM15.5288 3.4168L9.76024 9.18534C9.30958 9.636 9.30958 10.3679 9.76024 10.8186L15.5288 16.5871C15.9794 17.0378 16.7113 17.0378 17.162 16.5871C17.6127 16.1364 17.6127 15.4045 17.162 14.9539L12.2083 10.0001L17.1584 5.04641C17.6091 4.59575 17.6091 3.86386 17.1584 3.4132C16.7077 2.96253 15.9758 2.96253 15.5252 3.4132L15.5288 3.4168Z"
            fill="#A31D1D"
          />
        </svg>
        <span
          class="text-[#A31D1D] text-right text-[18px] font-medium leading-[27px] tracking-[-0.342px]"
        >
          Prev
        </span>
      </div>

      <!-- Pagination Box -->
      <div
        class="px-8 py-2 bg-[#A31D1D] rounded-full flex items-center gap-2.5"
      >
        <span
          class="text-white text-lg font-medium leading-relaxed"
        >
          Page
        </span>
        <span
          class="text-white text-lg font-semibold leading-relaxed"
        >
          1
        </span>
        <span
          class="text-white text-lg font-medium leading-relaxed"
        >
          of
        </span>
        <span
          class="text-white text-lg font-semibold leading-relaxed"
        >
          10
        </span>
      </div>

      <!-- Next Button -->
      <div class="flex items-center gap-2 cursor-pointer">
        <span
          class="text-[#A31D1D] text-right text-[18px] font-medium leading-[27px] tracking-[-0.342px]"
        >
          Next
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M17.3261 9.24989C17.7871 9.71087 17.7871 10.4595 17.3261 10.9205L11.4257 16.8209C10.9647 17.2819 10.2161 17.2819 9.7551 16.8209C9.29413 16.36 9.29413 15.6113 9.7551 15.1504L14.8221 10.0833L9.75879 5.0163C9.29781 4.55533 9.29781 3.80671 9.75879 3.34573C10.2198 2.88476 10.9684 2.88476 11.4294 3.34573L17.3298 9.2462L17.3261 9.24989ZM4.34511 3.34942L10.2456 9.24989C10.7066 9.71087 10.7066 10.4595 10.2456 10.9205L4.34511 16.8209C3.88413 17.2819 3.13551 17.2819 2.67453 16.8209C2.21356 16.36 2.21356 15.6113 2.67453 15.1504L7.74156 10.0833L2.67822 5.0163C2.21725 4.55533 2.21725 3.80671 2.67822 3.34573C3.1392 2.88476 3.88782 2.88476 4.34879 3.34573L4.34511 3.34942Z"
            fill="#A31D1D"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
