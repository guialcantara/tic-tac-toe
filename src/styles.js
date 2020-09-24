import styled from 'styled-components';

export const Container = styled.div`


.title{
    text-align: center;
    font-size: 3rem;
    color: #555;
    margin-bottom:2rem;
}

.scoreboard{
    position:absolute;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color: #555;
    font-weight: bold;
    top:0;

}
.scoreboard div{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.board{
    display: grid;
    grid-template-columns: repeat(3,240px);
    grid-template-rows: repeat(3,200px);
    gap: 1rem;
}
.board.game-over{
    opacity:0.8;
}

.cell{
    display: grid;
    align-items:center;
    justify-content: center;

    background: white;
    border-radius: 5px;
    font-size: 3rem;
    font-weight: bold;
    color: #00000066;
    cursor: pointer;

}
/* .board:not(.game-over) */
.board:not(.game-over){
    .cell:not(.game-over):not(.O):not(.X):hover{
        box-shadow: 
        0 20px 25px -5px rgba(0,0,0,0.1), 
        0 10px 10px -5px rgba(0,0,0,0.04);
    }
}

.o{
    color: var(--O-color); 
}
.x{
    color: var(--X-color);
    margin-left: 1.6rem;
}

.cell.O, .cell.X, .game-over .cell{
    cursor: not-allowed;
}

.cell.O{
    background: var(--O-color);
}
.cell.X{
    background: var(--X-color);
}

footer{
    text-align:center;
}

.winner-message{
    margin: 1rem;
}
.winner-message span.O{
    color: var(--O-color);
}

.winner-message span.X{
    color: var(--X-color);
}
.winner-message span.D{
    color: var(--D-color);
}

button{
    padding: 0.8rem 1.5rem;
    border: none;
    margin-top: 0.4rem;
    border-radius: 5px;
    box-shadow: 
    0 1px 3px 0 rgba(0,0,0,0.1),
    0 1px 2px 0 rgba(0,0,0,0.06);
    background: #4caf50;
    color: white;
    font-size: 1.2rem;
}

`;
