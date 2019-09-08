import React from 'react'
import { Modal as AntdModal } from 'antd'

function Modal(props) {
    const {showModal, setShowModal, title, plot} = props

    return (
        <AntdModal 
            visible={showModal}
            onOk={() => setShowModal(false)}
            onCancel={() => setShowModal(false)}
            title={title}
            closable={false}
        >   
            {plot}
        </AntdModal>
    )
}

export default Modal