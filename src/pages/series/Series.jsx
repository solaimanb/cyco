import React from 'react';
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Container from '../../components/container/Container';
import Loading from '../../components/loading/Loading';
import usePlayList from '../../hooks/usePlayList';

const Series = () => {
  const [playList, loading] = usePlayList();

  if (loading) {
    return <Loading />;
  }
  if (!Array.isArray(playList)) {
    return <div>Error: Movies data is not an array.</div>;
  }

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 pb-12">
        {playList.map((item, index) => (
          <Link
            key={`${item?.id}-${index}`}
            to="/series/seriesParts"
            className="card w-full mt-5 h-60 bg-base-100 shadow-xl image-full group cursor-pointer mx-auto"
          >
            <figure>
              <img
                className="group-hover:scale-110 transition w-full object-cover"
                src={item?.image}
                alt="thumbnail"
              />
            </figure>

            <div className="card-body absolute ">
              <h2 className="relative top-1/2 mb-2">{item?.playlistName}</h2>
              <div className="relative top-20 flex items-end">
                <MdOutlinePlaylistAdd className="text-2xl lg:text-3xl 2xl:text-4xl" />
                <span className="text-2xl lg:text-3xl 2xl:text-4xl">
                  {item?.numberOfVideos}
                </span>
                <span className="text-xs lg:text-sm ">Videos</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Series;
