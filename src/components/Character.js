import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Character = props => {
  const handleSaveItem = item => {
    const bookmark = [...item.bookmarkCharacter];
    let findItem = bookmark.find(o => o._id === item._id);
    if (findItem) {
      bookmark.splice(bookmark.indexOf(findItem), 1);
      item.setBookmarkCharacter(bookmark);
    } else {
      bookmark.push({
        _id: item._id,
        name: item.name,
        thumbnail: {
          path: item.thumbnail.path,
          extension: item.thumbnail.extension
        },
        extension: item.thumbnail.extension,
        description: item.description
      });
      item.setBookmarkCharacter(bookmark);
    }
  };

  let isFavourite = false;

  for (let i = 0; i < props.bookmarkCharacter.length; i++) {
    if (props._id === props.bookmarkCharacter[i]._id) {
      isFavourite = true;
    }
  }

  return (
    <div className="col-span-1 bg-white border-2 border-dark inline-block h-full mb-4">
      <Link to={`/character/${props._id}`}>
        {props.thumbnail.path && (
          <img
            className="object-cover w-full h-60"
            src={props.thumbnail.path + "." + props.thumbnail.extension}
            alt={props.name}
          />
        )}
      </Link>
      <div className="w-full p-2">
        <div className="flex justify-between items-start">
          {props.name && (
            <p className="font-secondary text-dark text-lg leading-6">
              {props.name}
            </p>
          )}
          <button
            type="button"
            className="ml-2"
            onClick={() => handleSaveItem(props)}
          >
            {isFavourite ? (
              <FontAwesomeIcon className="text-3xl text-red" icon={fasHeart} />
            ) : (
              <FontAwesomeIcon className="text-3xl text-dark" icon={farHeart} />
            )}
          </button>
        </div>
        {props.description && (
          <p className="text-dark font-primary leading-4 mt-2">
            {props.description.length > 75
              ? `${props.description.substring(0, 75)}...`
              : props.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Character;
