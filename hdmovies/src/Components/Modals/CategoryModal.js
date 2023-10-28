import React from 'react'
import MainModal from './MainModal'

function CategoryModal({ modalOpen, setModalOpen}) {
    return (
        <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-auto h-full bg-main text-white rounded-2xl">
                <h2 className="txt-3xl font-bold">Create</h2>
            </div>
      </MainModal>
  )
}

export default CategoryModal