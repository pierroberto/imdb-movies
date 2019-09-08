import React from 'react'
import { Modal as AntdModal } from 'antd'

interface Props {
    showModal: boolean
    setShowModal(showModal: boolean): void
    title: string
    plot: string
}

function Modal(props: Props) {
    const { showModal, setShowModal, title, plot } = props

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
