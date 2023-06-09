import {LitElement, html, css} from 'lit';


export class H1Element extends LitElement {
	static styles = css`
		* {
	      margin: 0;
	      padding: 0;
	      box-sizing: border-box;
    	}

    #main {
	    	display: flex;
	    	width: 220px;
	    }

		.blink {
				border-right: 2px solid black;
				animation-name: blink;
				animation-duration: 1s;
				animation-fill-mode: forwards;
				animation-iteration-count: 1;
				height: 32px;
				padding-left: 10px;
				margin-top: 7px;
			}
		@keyframes blink {
				from {
					border-right: 2px solid black;
				}
				90% {
					border-right: 2px solid black;
				}
				to {
					border-right: none;
				}
			}

		#text h1 {
				display: flex;
				font-size: 32px;
				font-weight: 200;
			}
	  span {
				border-right: 2px solid black;
				animation-name: typing, border;
				animation-duration: 1s, 0.3s;
				animation-fill-mode: forwards, forwards;
				visibility: hidden;
		  }
		span:nth-child(1) {
				animation-delay: 1s;
			}
		span:nth-child(2) {
				animation-delay: 1.1s;
			}
		span:nth-child(3) {
				animation-delay: 1.2s;
			}
		span:nth-child(4) {
				animation-delay: 1.3s;
			}
		span:nth-child(5) {
				width: 5px;
				animation-delay: 1.4s;
			}
		span:nth-child(6) {
				animation-delay: 1.5s;
			}
		span:nth-child(7) {
				animation-delay: 1.6s;
			}
		span:nth-child(8) {
				animation-delay: 1.7s;
			}
		span:nth-child(9) {
				animation-delay: 1.8s;
			}
		span:nth-child(10) {
				animation-delay: 1.9s;
			}
		span:nth-child(11) {
				animation-delay: 2.0s;
			}
		@keyframes typing {
				to {
					visibility: visible;
				}
			}
		@keyframes border {
				to {
					border: none;
				}
			}


		@media screen and (min-width: 728px) {
			#main {
					margin-left: -70px;
				}
			.blink {
					height: 44px;
				}
			#text h1 {
					display: flex;
					font-size: 42px;
					font-weight: 200;
				}
		}
	`;

	constructor() {
		super();
	}

	render() {
		return html`
		<div id="main">
			<div class="blink"></div>
			<div id="text">
				<h1>
					<span>e</span>
					<span>v</span>
					<span>a</span>
					<span>n</span>
					<span> </span>
					<span>l</span>
					<span>a</span>
					<span>n</span>
					<span>e</span>
					<span>s</span>
					<span>e</span>
				</h1>
			</div>
		</div>
		`;
	}
}

customElements.define('h1-element', H1Element);