export const Artist = ({album}) => {
    return (
        <div key={album.artists[0].id} className="artist">
            <a 
            href={album.artists[0].external_urls.spotify}
            target="_blank"
            rel="noreferrer">
                <span>{album.artists[0].name}</span>
            </a>
        </div>
    )    
}