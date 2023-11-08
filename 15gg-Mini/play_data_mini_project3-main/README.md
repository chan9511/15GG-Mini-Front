# PLAY_DATA_MINI_PROJECT3


<h2>기여자 (Contributors) ✨</h2>
<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/Hoonscucci">
        <img src="https://avatars.githubusercontent.com/u/132039559?v=4"width="145px;" alt=""/>
        <br />
        <sub>
          <b>이상훈</b>
        </sub>
      </a>
      <br />
      <a href="https://github.com/Hoonscucci" title="Code">🏠</a>
    </td>
    <td align="center">
      <a href="https://github.com/chan9511">
        <img src=https://avatars.githubusercontent.com/u/131934006?v=4"width="100px;" alt=""/>
        <br />
        <sub>
          <b>김찬동</b>
        </sub>
      </a>
      <br />
      <a href="https://github.com/chan9511" title="Code">🏠</a>
    </td>
  </tr>
</table>

## 리그오브 레전드 계정 검색 시스템 (그래서 님 티어가?)

![메인화면](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/0ddcda8a-0ef1-4289-b085-092666c0151b)


### 주제 탐색
##### 1. 리그오브 레전드 소환사 전적 그래프, 소환사 정보, 게임정보, 전적 로그 한눈에 보기
> 필요스킬
>  > React.js
>  >
>  > Riot API
##### 2. 리그오브 레전드 아이템 및 챔피언간 조합 분석 및 확률 통계 한눈에 보기
> 필요스킬
>  > Django(MVC패턴)
>  >
>  > Numpy,Pandas... 등 분석 기법


### 주제선정
> 프로젝트 기간이 3일인점을 고려하여 2번 주제보다는 1번 주제가 더 적합하다 생각되어 1번으로 진행 했습니다.
> 
> 프로젝트 제출 후 더 디벨롭 시켜서 2번까지 확장, 적용 해볼수 있을것 같습니다.


### 사용 라이엇 API 정리
![라이엇 api 홈페이지](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/a11b707b-9172-45d6-be3a-3986c077332c)
##### 1. SUMMONER-V4 - username 으로 검색하여 나오는 id와 puuid를 사용하여 다른 테이블에 사용
> 필요 검색 키워드 - username
> 
> 해당 유저의 정보를 반환
> 
> Riot API 에서 매치 내용이나 랭크를 보려면 account id, puuid가 필요한데 여기서 확인 가능

##### 2. LEAGUE-V4 - username으로 검색하여 나오는 id사용 하여 검색
> 필요 검색 키워드 - SUMMONERID
>
> 티어 확인가능 ex> 플래티넘
>
> 해당 티어에서의 점수 확인가능 ex> 43
>
> 랭크 통한 승, 패 확인가능


##### 3. MATCH-V5 - username에서 나오는 puuid를 사용하여 검색
> 필요 검색 키워드 - puuid
>
> puuid를 사용하여 해당 계정의 최근 매치의 matchid를 받아온다
>
> matchid를 입력하여 matchid 마다의 내용 확인 가능
>
> 같은팀, 상대팀 총 10명의 플레이어들의 해당 경기에서의 내용이 들어 있음
>
> 그중 우리가 검색하려는 계정의 정보만 추출 하여 사용하는 코드를 작성

##### 4. 챔피언 이미지 불러오기 
> 라이엇 API에는 챔피언 이미지가 없어서 따로 이미지 맵핑을 시켜서 반환했다.
>  >  https://ddragon.leagueoflegends.com/cdn/13.15.1/img/champion/ (이부분에 챔피언명.PNG를 입력)
>  >  해당코드로 검색결과 플레이한 챔프명을 받아 이미지를 동시에 띄울수 있게 하였다.


![일자별 진행플로우](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/6a4b9d55-d323-432b-9976-8c84058cda92)


![8-9 todo](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/ad71c4ab-2045-4199-b95f-43a7b0f95d8e)
![8-10 todo](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/e9795e34-a183-46e1-bf8c-7a369b127a63)
![8-11 todo](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/326ea2b3-7643-45e3-80af-3899d8189cbb)
---

### 최종 결과

![메인화면](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/0ddcda8a-0ef1-4289-b085-092666c0151b)
![검색화면_hoonscucci](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/bbec2f8c-5347-43e6-8863-63524dfb58b7)
![검색화면_타비잭스_티어볼수있음](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/9e2158ba-f7b2-4c3f-afb3-8334c7a75d8e)
![존재하지 않는 계정](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/1810e5d2-9b04-4d6e-8a80-60b0e65d657d)

---

### 회고
[이상훈](https://url.kr/hgsn5z)
