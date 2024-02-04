import Login from "./Login"
import Register from "./Register"
function Login_Register(props){
    return(
        <section id="form">
		<div class="container">
			<div class="row">
				<Login/>
				<div class="col-sm-1">
					<h2 class="or">OR</h2>
				</div>
				<Register/>
			</div>
		</div>
	</section>
    )
}
export default Login_Register;