import React from 'react';
import styled from 'styled-components';
import useFeed from './useFeed';
import { BiDotsHorizontalRounded, BiPaperPlane } from 'react-icons/bi';
import { IoMdHeartEmpty, IoLogoInstagram } from 'react-icons/io';
import { BsCircleFill, BsBookmark, BsEmojiSmile } from 'react-icons/bs';

const ContentWrap = styled.div`
  margin: 15px 0;
  background-color: white;

  .header {
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 0.9375rem;
    font-weight: bold;

    li {
      line-height: 0.5;
    }

    svg {
      font-size: 1.875rem;
      color: #a5a5a5;
    }

    > * {
      &:nth-of-type(2) {
        margin-left: 10px;
      }

      &:last-of-type {
        margin-left: auto;
      }
    }
  }

  .imgWrap {
    max-width: 420px;
    height: 420px;
    text-align: center;
    background-color: #dbdbdb;

    @media screen and (max-width: 420px) {
      max-width: 360px;
      height: 360px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .subHeader {
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 22px;

    svg {
      margin-right: 5px;
    }

    > * {
      &:last-of-type {
        margin-left: auto;
      }
    }
  }

  .like {
    margin: 15px 5px;
    font-size: 0.8125rem;
    font-weight: bold;
  }

  .comment {
    margin: 30px 5px;
    font-size: 0.8125rem;
    font-weight: bold;

    p {
      margin: 5px 0;

      .commentName {
        display: inline-block;
        width: 70px;
      }
    }
  }

  .commentInput {
    display: flex;
    align-items: center;
    padding: 10px 5px;
    border-top: 1px solid #dbdbdb;

    li {
      line-height: 0;
    }

    input {
      max-width: 320px;
      margin-left: 10px;

      &::placeholder {
        font-weight: bold;
      }
    }

    > * {
      &:last-of-type {
        margin-left: auto;
        button {
          background-color: white;
          font-size: 0.9375rem;
          font-weight: bold;
          color: #4ec2f8;
        }
      }
    }
  }
`;

function Feed({ data }) {
  const { feed, loading, comment, onChange, onClick, onEnter } = useFeed(data);
  return (
    <>
      {!loading && (
        <ContentWrap>
          <div>
            <ul className="header">
              <li>
                <BsCircleFill />
              </li>
              <li>{feed.name}</li>
              <li>
                <BiDotsHorizontalRounded />
              </li>
            </ul>
            <div className="imgWrap">
              <img src={feed.src} alt="image" />
            </div>
            <ul className="subHeader">
              <li>
                <IoMdHeartEmpty />
              </li>
              <li>
                <IoLogoInstagram />
              </li>
              <li>
                <BiPaperPlane />
              </li>
              <li>
                <BsBookmark />
              </li>
            </ul>
            <div className="like">좋아요 {feed.like}개</div>
            <div className="comment">
              {feed.comments.map((data, index) => {
                return (
                  <p key={index}>
                    <span className="commentName">{data.name}</span>
                    {data.comment}
                  </p>
                );
              })}
            </div>
            <ul className="commentInput">
              <li>
                <BsEmojiSmile />
              </li>
              <li>
                <input
                  name="comment"
                  placeholder="댓글달기..."
                  onChange={onChange}
                  onKeyDown={onEnter}
                  value={comment}
                />
              </li>
              <li>
                <button onClick={onClick}>게시</button>
              </li>
            </ul>
          </div>
        </ContentWrap>
      )}
    </>
  );
}

export default Feed;
