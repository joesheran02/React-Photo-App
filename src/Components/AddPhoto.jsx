import React from 'react'
import Navbar from './Navbar'

const AddPhoto = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-4 com-lg-3 col-xl-3 col-xxl-3">
                    <label htmlFor="" className="form-label">Photo ID</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 com-lg-3 col-xl-3 col-xxl-3">
                    <label htmlFor="" className="form-label">Title</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 com-lg-3 col-xl-3 col-xxl-3">
                    <label htmlFor="" className="form-label">Image File</label>
                    <input type="file" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 com-lg-3 col-xl-3 col-xxl-3">
                    <label htmlFor="" className="form-label">Thumbnail File</label>
                    <input type="file" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 com-lg-3 col-xl-3 col-xxl-3">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddPhoto
