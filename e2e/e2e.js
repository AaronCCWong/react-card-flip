import React from 'react';
import ReactDOM from 'react-dom';

import BootstrapCard from './BootstrapCard.jsx';

const App = () => {
	
	const styles = {
		card: {
			border: '1px solid #eeeeee',
			borderRadius: '3px',
			padding: '15px',
			width: '250px'
		},
		image: {
			height: '200px',
			width: '250px'
		}
	};
	
	return (
		<div>
			<h1 id="main_header">E2E Tests</h1>
			
			<h2>Bootstrap Cards</h2>
			
			<div className="container">
				<div className="row">
					<div className="col-12">
					<BootstrapCard styles={styles} id={'one_card_per_row_row_one_card_one'} />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<BootstrapCard styles={styles} id={'one_card_per_row_row_two_card_one'} />
					</div>
				</div>

				<div className="row">
					<div className="col-6">
						<BootstrapCard styles={styles} id={'two_cards_per_row_row_one_card_one'} />
					</div>
					<div className="col-6">
						<BootstrapCard styles={styles} id={'two_cards_per_row_row_one_card_two'} />
					</div>
				</div>

				<div className="row">
					<div className="col-6">
						<BootstrapCard styles={styles} id={'two_cards_per_row_row_two_card_one'} />
					</div>
					<div className="col-6">
						<BootstrapCard styles={styles} id={'two_cards_per_row_row_two_card_two'} />
					</div>
				</div>

				<div className="row">
					<div className="col-4">
						<BootstrapCard styles={styles} id={'three_cards_per_row_row_one_card_one'} />
					</div>
					<div className="col-4">
						<BootstrapCard styles={styles} id={'three_cards_per_row_row_one_card_two'} />
					</div>
					<div className="col-4">
						<BootstrapCard styles={styles} id={'three_cards_per_row_row_one_card_three'} />
					</div>
				</div>

        <div className="row">
          <div className="col-4">
            <BootstrapCard styles={styles} id={'three_cards_per_row_row_two_card_one'} />
          </div>
          <div className="col-4">
            <BootstrapCard styles={styles} id={'three_cards_per_row_row_two_card_two'} />
          </div>
          <div className="col-4">
            <BootstrapCard styles={styles} id={'three_cards_per_row_row_two_card_three'} />
          </div>
        </div>
      </div>
			
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
