import { Card } from "../card/card";
import "./card-list.styles.css"

export const CardList = (props) => {
  return (
    <div>
      <div className="card-list">
        {props.monsters.map((monster) => (
          <Card monster={monster} />
        ))}
      </div>
    </div>
  );
};
