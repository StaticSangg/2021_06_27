function MyPerson(props) {
    return (
        <div>
            이름 : {props.name} <br/>
            나이 : {props.age} <br/>
            키 : {props.heigh} <br/>
            <hr/>
        </div>
    );
}

export default MyPerson;