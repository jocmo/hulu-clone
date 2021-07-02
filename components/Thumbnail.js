import Image from 'next/image'
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { BeakerIcon } from '@heroicons/react/outline'
import { forwardRef } from 'react'

const Thumbnail = forwardRef(( {result}, ref ) => {
    const baseURL = "https://image.tmdb.org/t/p/original/"
    return (
        <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image
                layout='responsive'
                src={
                    `${baseURL}${result.backdrop_path || result.poster_path}` ||
                    `${baseURL}${result.poster_path}`
                }
                height={1080}
                width={1920}
            />

            <div>
                <p className="truncate">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.release_date || `${result.first_air_date}`} {"• "}  
                    <ThumbUpIcon className="h-5 mx-2"/>  {result.vote_count}
                </p>
                
            </div>
        </div>
    )
})

export default Thumbnail
