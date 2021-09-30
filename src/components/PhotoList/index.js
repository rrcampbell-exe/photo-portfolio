import React, { useState } from 'react';
import Modal from "../Modal"

const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cat green eyes',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green parrot',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Yellow macaw',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pug smile',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pancakes',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burrito',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Scallop pasta',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burger',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green river',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Docks',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Portrait of the Artist as a Young Cat',
      category: 'hashtag',
      description: 'Okay, so she wasn\'t *super* young when this photo was taken, but she\'s still looking good in her older age.',
    },
    {
      name: 'Paint Me Like One of Your French Cats',
      category: 'hashtag',
      description: 'If you love the camera, the camera will love you.',
    },
    {
      name: 'Peekaboo',
      category: 'hashtag',
      description: '"You thought you could take one while I wasn\'t looking, didn\'t you?"',
    },
    {
      name: 'At Attention',
      category: 'hashtag',
      description: '"Okay, but when can I get back to napping?',
    },
    {
      name: 'Le chat en profil',
      category: 'hashtag',
      description: 'Just *look* at those eyes.',
    },
    {
      name: 'Always on the Lookout',
      category: 'rhaegar',
      description: 'When *isn\'t he staring deep into your soul?',
    },
    {
      name: 'The Floor is Lava, and the Blanket is a Tank',
      category: 'rhaegar',
      description: 'There\'s nothing this cat loves more than being roasting hot.',
    },
    {
      name: 'Rhaegar the Tangled',
      category: 'rhaegar',
      description: 'If there\'s a blanket, he\'s under it.',
    },
    {
      name: 'A Loaf of Rhaegar',
      category: 'rhaegar',
      description: 'Just get a loaf of this guy, will ya?',
    },
    {
      name: 'Always Cuddling',
      category: 'rhaegar',
      description: 'Well, maybe not *always,* but he really does like to lay on top of me.',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  // Handling the modal

  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i})
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
