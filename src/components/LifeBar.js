import "../styles/LifeBar.css";
function LifeBar(props) {
  //stops = 1;
  switch (props.stops) {
    case 0:
      return (
        <div className="container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
      break;
    case 1:
      return (
        <div className="container">
          <div className="tenPercentClear"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
      break;
    case 2:
      return (
        <div className="container">
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>0</div>
        </div>
      );
      break;
    case 3:
      return (
        <div className="container">
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
      break;
    case 4:
      return (
        <div className="container">
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
      break;
    case 5:
      return (
        <div className="container">
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </div>
      );
      break;
    case 6:
      return (
        <div className="container">
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
      break;
    case 7:
      return (
        <div className="container">
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
      break;
    case 8:
      return (
        <div className="container">
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div></div>
          <div></div>
        </div>
      );
      break;
    case 9:
      return (
        <div className="container">
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div></div>
        </div>
      );
      break;
    case 10:
      return (
        <div className="container">
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
          <div className="tenPercentClear"></div>
        </div>
      );
      break;
  }
}

export default LifeBar;
