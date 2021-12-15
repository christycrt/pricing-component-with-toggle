const PricingCard = (props) => {
  return (
    <div className={`pricing-card pricing-card-${props.theme}`}>
      <h1 className="package">{props.package}</h1>
      <h2 className="dollar">$<span className="price">{props.price}</span></h2>
      <hr />
      <p>{props.storage} Storage</p>
      <hr />
      <p>{props.user} Users Allowed</p>
      <hr />
      <p>Send up to {props.sendup} GB</p>
      <hr />
      <button className="learnmore-btn">LEARN MORE</button>
    </div>
  );
};

export default PricingCard;
