// ./src/app/component/Selectplan.tsx




interface SelectPlanProps {
    isClicked: boolean;
    handleButtonClick: () => void;
  }
  
  const SelectPlan: React.FC<SelectPlanProps> = ({ isClicked, handleButtonClick }) => {
    return (
      <button
        className={`font-semibold 2xl:text-3xl lg:text-base md:text-sm text-center 2xl:w-[500px] xl:w-[300px] lg:w-[220px] md:w-[140px] 2xl:h-20 xl:h-12 lg:h-10 md:h-auto border-2 rounded-lg border-[#0466C8] text-[#0466C8] ${
          isClicked ? "bg-blue-700 text-white" : "bg-white text-[#0466C8]"
        }`}
        onClick={handleButtonClick}
      >
        Select Plan
      </button>
    );
  };
  

export default SelectPlan;
