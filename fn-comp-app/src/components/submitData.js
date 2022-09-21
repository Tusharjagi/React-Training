import Button from "./submitComponents/button";
import Input from "./submitComponents/input";

function SubmitData() {
    return(
        <div className="main">
          {/* <Input value={this.props.input} OnChangeHandle={this.props.change}/>
          <SubmitButton onHandleSubmit={this.props.handle}/> */}
         <Input/>
         <Button/>
        </div>
    )
}

export default SubmitData;