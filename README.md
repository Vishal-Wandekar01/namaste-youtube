Debouncing:
typing slow= iphone=200ms
typing fast = 150m(keystroke difference)

Performance :

- iphone pro max=14 letters \* 1000 people making api call = 10K api call
- with deboucing = 3 api \* 1000 =3k api call

Deboucing with 200ms

- if diff between two key stroke is < 200ms - Declne the api call
- > 200ms make an api call

/**
   * kay - i
   * - render the component
   * - call useEffect()
   * -start a time -> make a api call after 200 ms
   *
   * key - ip
   * -destroy the component(call useEffect return method)
   * -re-render the component
   * -call useEffect()
   * -start a time -> make a api call after 200 ms-this is new
   *
   *
   * setTimeout(200)-start the timet--after 200 it will call getsuggetions()
   *
   */

   const [searchQuery, SetSearchQuery] = useState("");
  // console.log(searchQuery);

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    //API call

    //make an aip call after every key press
    //if the diff between 2 aip call is <200ms
    //decline the aip call
    const timer = setTimeout(() => getSearchSuggetions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  

  const getSearchSuggetions = async () => {
    console.log("API call-" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    //console.log(json[1]);
    setSuggestions(json[1]);
  };

Cache:
time complexity to search inarray=O(n);
time complexity to search in Object/Map= O(1)

[i, ip, iph, ipho, iphone]

{
    i:
    ip:
    iph:
    ipho:
    iphone:

}

new Map();-even more optimised 
