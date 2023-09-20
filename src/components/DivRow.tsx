import styled from 'styled-components'

export const DivRow = styled.div`
	display: flex;
	flex-direction: row;
	gap: var(--gap, 10px);

	> div {
		flex-grow: 1;
	}
`
