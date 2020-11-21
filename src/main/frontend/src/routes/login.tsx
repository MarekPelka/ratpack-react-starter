import React from 'react';

export default function Login() {
	return (
		<header className="masthead">
			<div className="container h-100">
				<div className="row h-100 align-items-center">
					<div className="col-12">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title">Login</h5>
								</div>
								<div className="modal-body">
									<form>
										<div className="form-group">
											<label>Email</label>
											<input
												type="email"
												className="form-control"
												id="exampleInputEmail1"
												aria-describedby="emailHelp"
												placeholder="Enter email"
											/>
										</div>
										<div className="form-group">
											<label>Password</label>
											<input
												type="password"
												className="form-control"
												id="exampleInputPassword1"
												placeholder="Password"
											/>
										</div>
										<div className="form-group form-check">
											<input type="checkbox" className="form-check-input" id="exampleCheck1" />
											<label className="form-check-label">Remember me</label>
										</div>
										<button type="submit" className="btn btn-primary" style={{ width: '100%'}}>
											Login
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
