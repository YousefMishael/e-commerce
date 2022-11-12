import React, { useContext } from 'react'
import { GlobalContext } from '../../Utils/Context';

function CustomModal() {

    const context = useContext(GlobalContext);

    return (
        <div className="modal fade" id={'product-modal'} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5">{context.modalTitle}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {context.modalBody}
                </div>
                <div className="modal-footer">
                    {context.modalActions.map((action, idx) => <button type="button" key={idx} className={action.className} data-bs-dismiss={action.dismiss}>{action.title}</button>)}
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default  CustomModal;