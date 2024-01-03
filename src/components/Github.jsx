import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Github() {
  const [data, setData] = useState({});
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Shree2124')
      .then(response => response.json())
      .then(userData => {
        setData(userData);

        // Fetch repositories after user data is fetched
        fetch('https://api.github.com/users/Shree2124/repos')
          .then(response => response.json())
          .then(repoData => {
            setRepositories(repoData);
          });
      });
  }, []);

  return (
    <>
      <div className='text-center mx-auto text-white p-4'
        style={{backgroundColor: "rgb(207, 213, 234)"}}
      >
        <h1 className='text-3xl p-4'>Github Profile</h1>
        <div className='flex p-4'>
          <div className='p-5 rounded-3xl w-80 h-80 bg-center bg-no-repeat'
            style={{ backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAAB/lUB/1UB/1kAgCsB500B10gB2kkB1kgAVh0AWh4B91MAVBwAWB4AXB8B20kAaSMB4kwAEgYBrjoB8lEAYCAAiS4APxUByEMBpTcADgUAiy4AUBsAFggAGgkBsDsAmjMAHgoAeSkBlTIAPBQAQxYAZCEBzEQAMxFpntsMAAADJklEQVR4nO3c6XLaMBRAYRtKEkLISmlLt9D9/Z+w46Fu0QWbK0XqlcT5fjbBVXyqxc5MmwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzs6XV47X1uOJ7nbqurceUHR3rePSejzRXU+dH3B6bT2g6C7dhHfW44nuViS8tR5QdCJhfbPw7BLWPwvrW0jPbi+sfhbWn7C+WUjCfCxXs32rpe5jAwkfZ651snHrXbhDfdB9anAhfXK/sEo1bL0bMVTlQ/rgLHxsJ8713icat55IqDx5jczCJ/eCizTD1oudsGk2mUW8ip3wIKLxTIyfMLeIYQmX43thThFTJMxrOU0wCzv5REyTsGk+ZhMxTsIjz4W5RPyQKOFhRKvTaVhC1duZPCLGSXhx9JvkcmoTMdFCupNDxHSzsJNDxDjHmcHnZfuIqfbCnv1ymnQWdqwjyoTK17nieXnsBdsn44jJE1pHlAupMqFqL+zZRhQJla9zZcITLx4tI8qEyte5Xgltl9OwhOq9sPfZLGJgQrGQnkpoGfE/JbSLGLiQeie0W07jLKSqf9o2EefuUNtUs7CzNYn41fkJJ63uUyfekQ55cO/L2/Bh+1g497V9p/pQUMLmXtyXNy8YtofngIiex5meTcKgiEUlDIkYsBd2rBI2TesbMU7Cby8ctgffiDLhXPfX2CX0jlhcQt+Ixc3CjlfEwhbSHZ+IRSb02hOLTOgTsdCEHhFFwivd5c0THkScDH2ffHdcwF7YUy6nhc7CzrMzhqGI4nl5eqO7eA4JlRELTngQ8ehyWuxCuqOIGJbwh7gv36MO28PpiHIWFpZQETHOXmiW8HTEAp8LpRMRwxJmMws74xELPs78MxoxTkKjvbA3drCJc5z5mWLYPkYiVjALO3Imbv5+RSYMm4XmCUciil/ClZqwe050bf/8eWDCmXu1DBI2G/c/J1n3Nz1sFm7X7uV+JRv3iwUmLEhYwoLI44xyLyxI2EJakMDjTEFEQuWjfUHqX0irn4WBz4UFqX4vPLuFtL6E9R9nLtrJngoTztvFvra+hAAAAAAAAAAAAAAAAAAAAAAAAACAc/cbWugqPH49L9UAAAAASUVORK5CYII=')" /*"url('https://avatars.githubusercontent.com/u/141703333?v=4')"*/ }}
          ></div>
          <ul className='text-left mx-3 p-2 gap-1'>
            <li>Username: {data.login}</li>
            <li>
              <ul className='text-left'>
                <caption>Repositories:</caption>
                {repositories.map(repo => (
                  <li key={repo.id}>
                    <NavLink className={({isActive}) =>
                                        `mx-4 block pr-4 pl-6 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} py-2 px-2 hover:bg-gray-700 hover:underline hover:rounded-lg lg:hover:bg-transparent text-white lg:border-0 hover:text-orange-700 lg:p-0` }
                     to={`https://shree2124.github.io/${repo.name}`} >{repo.name}</NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Github;