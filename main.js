var global_result = "";


function get_movies(num_movies) {
    $.ajax({
        dataType: 'json',
        url: "https://itunes.apple.com/us/rss/topmovies/limit=" + num_movies + "/json",
        success: function (result) {
            console.log(result);
            return result.feed.entry;
            //global_result = result;
            //for(var x = 0; x <global_result.feed.entry.length; x++){
            //var movie = global_result.feed.entry[x];
            //var movie_image = movie["im:image"][2].label;
            //var movie_title = movie["im:name"].label;
            //var movie_director = movie["im:artist"].label;
            //var movie_plot =

        }
    });
}
