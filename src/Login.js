import React from 'react';

const Login=(props)=>{
	const {email,setEmail,password,setPassword,handleLogin,handleSignUp,hasAccount,setHasAccount,
		emailError,passwordError}=props
	return(
		<section className='login'>
			<div className='loginContainer'>
				<label>Username</label>
				<input type="text" autoFocus required
					value={email} onChange={(e)=>setEmail(e.target.value)}
				/>
				<p className='errorMsg'>{emailError}</p>
				<label>Password</label>
				<input type="text" required
					value={password} onChange={(e)=>setPassword(e.target.value)}
				/>
				<p className='errorMsg'>{passwordError}</p>
				<div className='btnContainer'>
					{hasAccount? (
						<React.Fragment>
							<button onClick={handleLogin}>Sign In</button>
							<p>Don't have an account 
							<span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span>
							</p>
						</React.Fragment>
						):(
						<React.Fragment>
							<button onClick={handleSignUp}>Sign Up</button>
							<p>Already have an account 
							<span onClick={()=>setHasAccount(!hasAccount)}>Sign In</span>
							</p>
						</React.Fragment>
						)}
				</div>
			</div>
		</section>
	)
}

export default Login