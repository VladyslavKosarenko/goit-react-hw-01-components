import styled from "styled-components";
export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      { title ? <StatisticsH2 className="title">{title}</StatisticsH2> : null}

          <StatisticsUl className="stat-list">
              {stats.map(({ id, label, percentage }) => (
               <StatisticsLi className="item" key={id}>
                      <span className="label">{label}</span>
                      <span className="percentage">{percentage}%</span>
                  </StatisticsLi>    
         ))}    
  </StatisticsUl>
</section>
  );
};

const StatisticsUl = styled.ul`

list-style: none;
display:flex;
justify-content: center;
align-items: center;
gap: 10px;

`
const StatisticsLi = styled.li`

list-style: none;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
gap: 10px;

`
const StatisticsH2 = styled.h2`

list-style: none;
display:flex;
justify-content: center;
align-items: center;
gap: 10px;

`