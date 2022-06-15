import React from 'react'
import close from '../../assets/images/close.svg'
import './Realizations.scss'

function Realizations() {
  const [modal, setModal] = React.useState(null)
  const [image, setImage] = React.useState(null)

  React.useEffect(() => {
    setModal(document.getElementById('modal'))
    setImage(document.getElementById('modalImage'))
  }, [])

  const renderGallery = () => {
    var i,
      imgs = []
    for (i = 1; i <= 14; i++) {
      imgs.push(i)
    }
    return imgs.map((img) => (
      <img
        key={img.toString()}
        src={`assets/gallery/small/image${img}.png`}
        onClick={() => modalImage(img)}
        alt={`Gallery small image number ${img}`}
      />
    ))
  }

  const modalImage = (img: number) => {
    modal.setAttribute('style', 'display: block')
    image.setAttribute('src', `assets/gallery/image${img}.png`)
    image.setAttribute('alt', `Gallery image number ${img}`)
  }

  const modalCloseWindow = (e: React.MouseEvent) => {
    if (e.target === document.getElementById('modal')) {
      modal.setAttribute('style', '')
      image.setAttribute('src', '')
    }
  }

  const modalClose = () => {
    modal.setAttribute('style', '')
    image.setAttribute('src', '')
  }
  return (
    <div id='realizations' className='container'>
      <h5>Realizations</h5>
      <div className='wrapper'>{renderGallery()}</div>
      <div
        id='modal'
        style={{ display: 'none' }}
        onClick={(e) => modalCloseWindow(e)}>
        <div id='modalAfter'>
          <img
            id='close'
            src={close}
            alt='Close'
            onClick={() => modalClose()}
          />
          <img id='modalImage' src='' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Realizations
