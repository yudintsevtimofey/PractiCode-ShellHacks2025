import "../styles/LifeBar.css";
function LifeBar(props) {
  //stops = 1;
  switch (props.stops) {
    case 0:
      return (
        <div className="container">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </div>
      );
      break;
    case 1:
      return (
        <div className="container">
          <div className="tenPercentClear">1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </div>
      );
      break;
    case 2:
      return (
        <div className="container">
          <div className="tenPercentClear">1</div>
          <div className="tenPercentClear">2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </div>
      );
      break;
    case 3:
      return (
        <div className="container">
          <div className="tenPercentClear">1</div>
          <div className="tenPercentClear">2</div>
          <div className="tenPercentClear">3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </div>
      );
      break;
    case 4:
      return (
        <div className="container">
          <div className="tenPercentClear">1</div>
          <div className="tenPercentClear">2</div>
          <div className="tenPercentClear">3</div>
          <div className="tenPercentClear">4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </div>
      );
      break;
    case 5:
      return (
        <div className="container">
          <div className="tenPercentClear">1</div>
          <div className="tenPercentClear">2</div>
          <div className="tenPercentClear">3</div>
          <div className="tenPercentClear">4</div>
          <div className="tenPercentClear">5</div>
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
          <div className="tenPercentClear">1</div>
          <div className="tenPercentClear">2</div>
          <div className="tenPercentClear">3</div>
          <div className="tenPercentClear">4</div>
          <div className="tenPercentClear">5</div>
          <div className="tenPercentClear">6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </div>
      );
      break;
    case 7:
      return (
        <div className="container">
          <div className="tenPercentClear">1</div>
          <div className="tenPercentClear">2</div>
          <div className="tenPercentClear">3</div>
          <div className="tenPercentClear">4</div>
          <div className="tenPercentClear">5</div>
          <div className="tenPercentClear">6</div>
          <div className="tenPercentClear">7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </div>
      );
      break;
    case 8:
      return (
        <div className="container">
          <div className="tenPercentClear">1</div>
          <div className="tenPercentClear">2</div>
          <div className="tenPercentClear">3</div>
          <div className="tenPercentClear">4</div>
          <div className="tenPercentClear">5</div>
          <div className="tenPercentClear">6</div>
          <div className="tenPercentClear">7</div>
          <div className="tenPercentClear">8</div>
          <div>9</div>
          <div>10</div>
        </div>
      );
      break;
    case 9:
      return (
        <div className="container">
          <div className="tenPercentClear">1</div>
          <div className="tenPercentClear">2</div>
          <div className="tenPercentClear">3</div>
          <div className="tenPercentClear">4</div>
          <div className="tenPercentClear">5</div>
          <div className="tenPercentClear">6</div>
          <div className="tenPercentClear">7</div>
          <div className="tenPercentClear">8</div>
          <div className="tenPercentClear">9</div>
          <div>10</div>
        </div>
      );
      break;
    case 10:
      return (
        <div className="container">
          <div className="tenPercentClear">1</div>
          <div className="tenPercentClear">2</div>
          <div className="tenPercentClear">3</div>
          <div className="tenPercentClear">4</div>
          <div className="tenPercentClear">5</div>
          <div className="tenPercentClear">6</div>
          <div className="tenPercentClear">7</div>
          <div className="tenPercentClear">8</div>
          <div className="tenPercentClear">9</div>
          <div className="tenPercentClear">10</div>
        </div>
      );
      break;
  }
}

export default LifeBar;
