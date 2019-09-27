import { observer } from "mobx-react";
import { toJS } from "mobx";
import React from "react";

/**
 * observer是 mobx-react的保证组件根据数据更新的组件
 * observer 内部实现是用autorun包裹了React组件的render函数
 * 当store里面的observable数据更新，autorun会自动执行render重新渲染组件
 */

@observer
class TodoView extends React.Component {
	handleChange(index,e){
		const bool = e.target.checked;
		this.props.dispatch(index,bool);
	}
	render() {
		const todos = toJS(this.props.todos);
		return (
			<div className="todoView">
				<div>
					{
						todos.map((item,index) => {
							return (
								<div key={index}>
									<input type="checkbox" defaultChecked={item.completed} onChange={this.handleChange.bind(this,index)}/>
									<span>{item.task}</span>
								</div>
							);
						})
					}
				</div>
			</div>
		);
	}
}

export default TodoView;