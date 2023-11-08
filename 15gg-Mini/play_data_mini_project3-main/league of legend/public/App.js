import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});
  const [tier, setTier] = useState("");
  const [result3, setResult3] = useState("");
  const [isData, setIsData] = useState(false);
  const [userMatch, setUserMatch] = useState([]);
  const API_KEY = "RGAPI-242fc4fa-618f-4252-97c5-f7b13f486c76";

  async function searchForPlayer() {
    var APIcallString =
      "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
      searchText +
      "?api_key=" +
      API_KEY

    try {
      const result = await axios.get(APIcallString);
      setPlayerData(result.data);
      const playerId = result.data.id;

      const result2 = await axios.get(
        `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${playerId}/top?api_key=${API_KEY}`
      );

      const networkresult3 = await axios.get(
        `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerId}?api_key=${API_KEY}`
      );
      console.log(networkresult3)
      setResult3(networkresult3);
      setIsData(true);

      const puuid = result.data.puuid;
      const matches = await axios.get(
        `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids??start=0&count=20&api_key=${API_KEY}`
      );
      const matchId = matches.data;
      const matchLog = [];

      for (let i = 0; i < 10; i++) {
        matchLog.push(
          await axios.get(
            `https://asia.api.riotgames.com/lol/match/v5/matches/${matchId[i]}?api_key=${API_KEY}`
          )
        );
      }

      const userDatas = [];
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (
            matchLog[i].data.info.participants[j].summonerName ===
            result.data.name
          ) {
            userDatas.push({
              timePlayed:
                parseInt(
                  matchLog[i].data.info.participants[j].timePlayed / 60
                ) +
                "분" +
                (matchLog[i].data.info.participants[j].timePlayed % 60) +
                "초",
              championName: matchLog[i].data.info.participants[j].championName,
              champLevel: matchLog[i].data.info.participants[j].champLevel,
              kills: matchLog[i].data.info.participants[j].kills,
              deaths: matchLog[i].data.info.participants[j].deaths,
              assists: matchLog[i].data.info.participants[j].assists,
              cs:
                matchLog[i].data.info.participants[j]
                  .totalAllyJungleMinionsKilled +
                matchLog[i].data.info.participants[j]
                  .totalEnemyJungleMinionsKilled +
                matchLog[i].data.info.participants[j]
                  .totalMinionsKilled,
              win: matchLog[i].data.info.participants[j].win,
              kda: (
                (matchLog[i].data.info.participants[j].kills +
                matchLog[i].data.info.participants[j].assists) /
                  matchLog[i].data.info.participants[j].deaths
              ).toFixed(2),
              img: `https://ddragon.leagueoflegends.com/cdn/13.15.1/img/champion/${matchLog[i].data.info.participants[j].championName === "FiddleSticks" 
              ? "Fiddlesticks" : matchLog[i].data.info.participants[j].championName}.png`,
              gameMode: matchLog[i].data.info.gameMode,
            });
          }
        }
      }
      setUserMatch(userDatas);
      console.log(userMatch);
    } catch (error) {
      console.log(error.response)

        alert("존재하지 않는 계정입니다.");
  
    }
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      searchForPlayer();
    }
  }
  

  return (
    <div className="App">
      <div className="container">
        <h1 className="display-4">그.님.티?</h1>

        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)} placeholder="계정을 입력하세요"
          onKeyPress={handleKeyPress} 
        ></input>

        <button className="btn btn-warning mb-2" onClick={searchForPlayer}>검색</button>
      </div>

      {JSON.stringify(playerData) !== "{}" ? (
        <div className="container mt-4">
          {/* 플레이어 정보 */}
          <p>{playerData.name}</p>
          <p>소환사 레벨 몇인데? {playerData.summonerLevel}</p>
          <h2><b>그래서 니 티어 뭔데?</b></h2>

          {isData === true &&
          result3.data.length >= 1 &&
          result3.data[0].queueType === "RANKED_SOLO_5x5" ?  (
            <p>
              {`${result3.data[0].tier} ${result3.data[0].rank} ${result3.data[0].leaguePoints}점`}{" "}
              ({result3.data[0].wins + result3.data[0].losses}전{" "}
              {result3.data[0].wins}승 {result3.data[0].losses}패)
            </p>
          ) : (
            <p>노배치</p>
          )}
        </div>
      ) : (
        <p>no player data</p>
      )}
      <div className="container mt-4">
        <h2>매치 정보</h2>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr className="table-dark">
                <th scope="col">챔피언</th>
                <th scope="col">게임 모드</th>
                <th scope="col">KDA</th>
                <th scope="col">K/D/A</th>
                <th scope="col">CS</th>
                <th scope="col">레벨</th>
                <th scope="col">플레이 시간</th>
                <th scope="col">결과</th>
              </tr>
            </thead>
            <tbody>
              {userMatch.map((match, index) => (

                <tr key={index} className={`text-center ${match.win? "table-primary" : "table-danger"}`} > 
                  <td>
                    <img
                      src={match.img}
                      alt="챔피언 이미지"
                      className="champion-img"
                    />
                  </td>
                  <td>{match.gameMode === 'CLASSIC' ? "랭크" :match.gameMode === 'ARAM' ? '칼바람' : "unknwon"}</td>
                  <td>{match.kda}</td>
                  <td>{match.kills}/{match.deaths}/{match.assists}</td>
                  <td>{match.cs}</td>
                  <td>{match.champLevel}</td>
                  <td>{match.timePlayed}</td>
                  <td>{match.win ? "승리" : "패배"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default App;