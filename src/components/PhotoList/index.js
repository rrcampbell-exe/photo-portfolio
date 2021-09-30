import React, { useState } from 'react';
import Modal from "../Modal"

const PhotoList = ({ category }) => {

  const [photos] = useState([
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
      description: '"Okay, but when can I get back to napping?"',
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
    {
      name: 'Naps with Friends',
      category: 'two-gether',
      description: 'Are they... are they holding paws?!',
    },
    {
      name: 'That One Shot from the Lion King',
      category: 'two-gether',
      description: 'A photo so old that Rhaegar is still the smaller of the two cats.',
    },
    {
      name: 'Lazy Sundays',
      category: 'two-gether',
      description: 'All predators must laze.',
    },
    {
      name: 'The Ol\' Ear Smooch',
      category: 'two-gether',
      description: '"It\'s a sign of affection, okay?"',
    },
    {
      name: 'Table Lords',
      category: 'two-gether',
      description: '"We\'re not supposed to be up here, we know, but are you really going to make us move?"',
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
