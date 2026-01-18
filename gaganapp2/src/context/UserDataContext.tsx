import { createContext, useContext, useState, type ReactNode } from 'react';

export interface VesselOperationData
{
    draftAftPeak: number;
    draftForePeak: number;
    gm: number;
    heading: number;
    speed: number;
    maxAllowedRoll: number;
}

export interface SeaStateData
{
    meanWaveDirection: number;
    significantWaveHeight: number;
    wavePeriod: number;
}

export interface UserInputData
{
    vesselOperation: VesselOperationData;
    seaState: SeaStateData;
    selectedFolder: string;
    uploadedFile: string;
}

interface UserDataContextType
{
    userInputData: UserInputData;
    setUserInputData: (data: UserInputData) => void;
    updateVesselOperation: (data: Partial<VesselOperationData>) => void;
    updateSeaState: (data: Partial<SeaStateData>) => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export const UserDataProvider = ({ children }: { children: ReactNode; }) =>
{
    const [ userInputData, setUserInputData ] = useState<UserInputData>({
        vesselOperation: {
            draftAftPeak: 10,
            draftForePeak: 10,
            gm: 3,
            heading: 18,
            speed: 12,
            maxAllowedRoll: 20,
        },
        seaState: {
            meanWaveDirection: 130,
            significantWaveHeight: 5,
            wavePeriod: 10,
        },
        selectedFolder: 'sample',
        uploadedFile: 'proll.cfg',
    });

    const updateVesselOperation = (data: Partial<VesselOperationData>) =>
    {
        setUserInputData((prev) => ({
            ...prev,
            vesselOperation: { ...prev.vesselOperation, ...data },
        }));
    };

    const updateSeaState = (data: Partial<SeaStateData>) =>
    {
        setUserInputData((prev) => ({
            ...prev,
            seaState: { ...prev.seaState, ...data },
        }));
    };

    return (
        <UserDataContext.Provider
            value={{ userInputData, setUserInputData, updateVesselOperation, updateSeaState }}
        >
            {children}
        </UserDataContext.Provider>
    );
};

export const useUserData = () =>
{
    const context = useContext(UserDataContext);
    if (!context)
    {
        throw new Error('useUserData must be used within UserDataProvider');
    }
    return context;
};
