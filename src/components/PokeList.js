import React from 'react';
import Pokemon from './Pokemon';


class PokeList extends React.Component {
  render(){
    const html = this.props.data.map((item) => {
      return (
        <li className="card-container" key={item.id}>
          <Pokemon name={item.name} img={item.url} family={item.types} />
        </li>
      );
    });
    return (
      <>
        <ul className="main-container">{html}</ul>
      </>
    );
  }
}

export default PokeList;