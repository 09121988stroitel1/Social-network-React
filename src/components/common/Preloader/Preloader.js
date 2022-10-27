import preloaded from '../../../assets/images/Spinner-1s-200px.svg';

let Preloader = (props) => {
  return  <div>
    <img src={preloaded} style={{background: 'white'}}/>
    </div>
}

export default Preloader;