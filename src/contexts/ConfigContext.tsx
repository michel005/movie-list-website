import React, {Dispatch, SetStateAction} from "react";
import { createContext, useState } from 'react'

export const ConfigContext = createContext<{
	data: {},
	setData: Dispatch<SetStateAction<any>>,
}>({
	data: {},
	setData: () => {},
})

export const ConfigProvider = ({ children }: { children: any }) => {
	const [data, setData] = useState<any>({})

	return <ConfigContext.Provider value={{ data, setData }}>{children}</ConfigContext.Provider>
}
