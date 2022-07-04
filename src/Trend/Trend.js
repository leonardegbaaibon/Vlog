import { useState, useEffect } from "react";
import { IoMdAnalytics } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import axios from "axios";



const Trend = () => {
  const [test, setTest] = useState([]);
  const [like, setLike] = useState(0)
  // const [describe, setDescribe] = useState('Yellow');

  const num = [1, 2, 3, 4, 5, 6];
  
  const Option = {
    method: "GET",
    url:
      "https://newsapi.org/v2/everything?" +
      "q=Apple&" +
      "sortBy=publishedAt&" +
      "apiKey=a652e51aa018474c994ed646bf93ca43",
  };
  useEffect(() => {
    axios
    .request(Option)
      .then((res) => {
        let call = [];
        let num = [];
        for (let i = 0; i < 6; i++) {
          console.log(res.data.articles[i]);

          let man = res.data.articles[i];
          // console.log(i)
          num.push(i);
          call.push(res.data.articles[i]);
        }
        console.log(call);
        console.log(num);
        setTest(call);
        // console.log(num.indexOf(0))
      })
      .catch(function (error) {
        console.error(error);
      });
    }, []);
    // console.log(call)
    
    return (
    <div className="trender">
      <div className="trend-icon">
        <div>
        <IoMdAnalytics/>
        </div>
        <b>  Trends on VTBlog</b>

      </div>
      <div className="trend-div">
        {test.map((data) => {
          return (
            <div className="trending">
              <div>
                {data.source.name}
              </div>
              <a href={data.url} className="title">{data.title}...</a>
              <div id="describe">{data.description}</div>
              <div>
                <a href={data.url}>Read more</a>
              </div>
              <div className="likers">
                <div>
                  <BiLike onClick={() => setLike(like + 1)} /> {like}
                </div>
                <div>
                  <BiDislike />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trend;
