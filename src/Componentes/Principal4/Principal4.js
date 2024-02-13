function Principal4(){
    return(
        <div>
            <div className="content-principal4">
                <div className="img-left">
                    <img src="./imagens/calculator-image.png"/>
                </div>
                <div className="calculator">
                    <div>
                        <p>YOUR FREEDOM</p>
                        <h1>Get A Financial Plan</h1>
                    </div>
                    <div className="labels">
                        <div className="primeiras-labels">
                            <label className="deco-labels" for="name">Your Name</label>
                            <input type="text" id="name" name="name"></input>
                            <label className="deco-labels" for="email">Your Email</label>
                            <input type="email" id="email" name="email"></input>
                        </div>
                        <div className="segundas-labels">
                            <label className="deco-labels" for="subject">Subject</label>
                            <input type="text" id="subject" name="subject"></input>
                            <label className="deco-labels" for="reason">Your reason</label>
                            <select id="reason" name="reason">
                            <option value="">Select an option</option>
                            <option value="option1">Online Banking</option>
                            <option value="option2">Financial Control</option>
                            <option value="option3">Yearly Profit</option>
                            <option value="option4">Yearly Profit</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Principal4