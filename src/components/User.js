const User=(props)=>
{
    return(
<div className="user-cards">
    <h2>name:{props.name}</h2>
    <h3>location:{props.location}</h3>
    <h4>Contact:@munchly</h4>
</div>
    );
};
export default User;