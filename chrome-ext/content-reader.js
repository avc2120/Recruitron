if (window == window.top) {
  console.log('Hello World');

  $(document).ready(function() {
    console.log('Current URL is ' + window.location.href);
    //Put injection scripts here
  });
}