import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/NavBar/NavBar';
import Products from './Pages/Products/Products';
import './Styles/_mixins.scss'
import CustomModal from './Components/CustomModal/CustomModal';
import { GlobalContext } from './Utils/Context';
import {Modal} from 'bootstrap';
import React, { useEffect, useState } from 'react';

function App() {
  const [modal, setModal] = useState();
  const [state, setState] = useState({
      modalTitle: '',
      modalBody: '',
      modalActions: [],
      showModal: (title, body, actions) => {

        setState({
          ...state,
          modalTitle: title,
          modalBody: body,
          modalActions: actions
        })
      }
  });

  // constructor(props){
  //   super(props);

  //   this.state = {
  //     modalTitle: '',
  //     modalBody: '',
  //     modalActions: [],
  //     showModal: this.showModal
  //   }
  // }


  // const showModal = (title, body, actions) => {

  //   setState({
  //     ...state,
  //     modalTitle: title,
  //     modalBody: body,
  //     modalActions: actions
  //   })
  // }

  useEffect(() => {
      const modal = new Modal('#product-modal');
      setModal(modal);
  }, [])

  useEffect(() => {
      modal?.show();
  }, [state]);

  // componentDidMount(){
  //   this.modal = new Modal('#product-modal');
  // }
  

    return (
      <GlobalContext.Provider value={state}>
        <div>
          <CustomModal />
          <NavBar />
          <Products />
        </div>
      </GlobalContext.Provider>
    );
}

export default App;
