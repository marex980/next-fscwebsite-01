export const Dots = () => {
    return (<>
        <div className="bg-circle__wrapper bg-circle__wrapper--1">
            <div className="bg-circle bg-circle__scale--1"></div>
        </div>
        <div className="bg-circle__wrapper bg-circle__wrapper--2">
            <div className="bg-circle bg-circle__scale--2"></div>
        </div>
        <div className="bg-dot__wrapper bg-dot__wrapper--1">
            <div className="bg-dot bg-dot__scale--1"></div>
        </div>
        <div className="bg-dot__wrapper bg-dot__wrapper--2">
            <div className="bg-dot bg-dot__scale--2"></div>
        </div>
        <div className="bg-dot__wrapper bg-dot__wrapper--3">
            <div className="bg-dot bg-dot__scale--3"></div>
        </div>
        <div className="bg-dot__wrapper bg-dot__wrapper--4">
            <div className="bg-dot bg-dot__scale--5"></div>
        </div>
        <div className="bg-dot__wrapper bg-dot__wrapper--5">
            <div className="bg-dot bg-dot__scale--5"></div>
        </div>
        </>
      );
  };
  
  export const Lines = () => {
    return (
    <div className="lines">
        <div className="line o-hidden"></div>
        <div className="line o-hidden"></div>
        <div className="line o-hidden"></div>
  </div>
    )
  }