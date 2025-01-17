import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  Acknowledgement: p.createTable({
    id: p.string(),
    dispatcherAddress: p.hex(),
    dispatcherType: p.string(),
    sourcePortAddress: p.string(),
    sourceChannelId: p.string(),
    sequence: p.bigint(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
    from: p.string(),
  }),
  CloseIbcChannel: p.createTable({
    id: p.string(),
    dispatcherAddress: p.hex(),
    dispatcherType: p.string(),
    portAddress: p.string(),
    channelId: p.string(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
    from: p.string(),
  }),
  ConnectIbcChannel: p.createTable({
    id: p.string(),
    dispatcherAddress: p.hex(),
    dispatcherType: p.string(),
    portAddress: p.string(),
    channelId: p.string(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
    from: p.string(),
  }),
  OpenIbcChannel: p.createTable({
    id: p.string(),
    dispatcherAddress: p.hex(),
    dispatcherType: p.string(),
    portAddress: p.string(),
    version: p.string(),
    ordering: p.int(),
    feeEnabled: p.boolean(),
    connectionHops: p.string().list(),
    counterpartyPortId: p.string(),
    counterpartyChannelId: p.string(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
    from: p.string(),
  }),
  OwnershipTransferred: p.createTable({
    id: p.string(),
    dispatcherAddress: p.hex(),
    dispatcherType: p.string(),
    previousOwner: p.string(),
    newOwner: p.string(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
    from: p.string(),
  }),
  RecvPacket: p.createTable({
    id: p.string(),
    dispatcherAddress: p.hex(),
    dispatcherType: p.string(),
    destPortAddress: p.string(),
    destChannelId: p.string(),
    sequence: p.bigint(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
    from: p.string(),
  }),
  SendPacket: p.createTable({
    id: p.string(),
    dispatcherAddress: p.hex(),
    dispatcherType: p.string(),
    sourcePortAddress: p.string(),
    sourceChannelId: p.string(),
    packet: p.string(),
    sequence: p.bigint(),
    timeoutTimestamp: p.bigint(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
    from: p.string(),
  }),
  Timeout: p.createTable({
    id: p.string(),
    dispatcherAddress: p.hex(),
    dispatcherType: p.string(),
    sourcePortAddress: p.string(),
    sourceChannelId: p.string(),
    sequence: p.bigint(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
    from: p.string(),
  }),
  WriteAckPacket: p.createTable({
    id: p.string(),
    dispatcherAddress: p.hex(),
    dispatcherType: p.string(),
    writerPortAddress: p.string(),
    writerChannelId: p.string(),
    sequence: p.bigint(),
    ackPacketSuccess: p.boolean(),
    ackPacketData: p.string(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
    from: p.string(),
  }),
  WriteTimeoutPacket: p.createTable({
    id: p.string(),
    dispatcherAddress: p.hex(),
    dispatcherType: p.string(),
    writerPortAddress: p.string(),
    writerChannelId: p.string(),
    sequence: p.bigint(),
    timeoutHeightRevisionNumber: p.bigint(),
    timeoutHeightRevisionHeight: p.bigint(),
    timeoutTimestamp: p.bigint(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
    from: p.string(),
  }),
  PacketStates: p.createEnum(["SENT", "RECV", "WRITE_ACK", "ACK", "TIMEOUT", "WRITE_TIMEOUT"]),
  Packet: p.createTable({
    id: p.string(),
    state: p.enum('PacketStates'),
    // sequence: p.bigint(),
    // sourcePortAddress: p.string().optional(),
    // sourceChannelId: p.string().optional(),
    // destPortAddress: p.string().optional(),
    // destChannelId: p.string().optional(),
    // timeoutTimestamp: p.bigint(),
    // createTime: p.bigint().optional(),
    // endTime: p.bigint().optional(),
    // sendTx: p.string().optional(),
    // rcvTx: p.string().optional(),
    // ackTx: p.string().optional(),
    // srcChainId: p.int().optional(),
    // destChainId: p.int().optional(),
    sendPacketId: p.string().optional().references('SendPacket.id'),
    sendPacket: p.one('sendPacketId'),
    recvPacketId: p.string().optional().references('RecvPacket.id'),
    recvPacket: p.one('recvPacketId'),
    writeAckPacketId: p.string().optional().references('WriteAckPacket.id'),
    writeAckPacket: p.one('writeAckPacketId'),
    ackPacketId: p.string().optional().references('Acknowledgement.id'),
    ackPacket: p.one('ackPacketId'),
  }),
  ChannelStates: p.createEnum(["INIT", "TRY", "OPEN", "CLOSED"]),
  Channel: p.createTable({
    id: p.string(),
    channelId: p.string(),
    portId: p.string(),
    counterpartyPortId: p.string(),
    counterpartyChannelId: p.string(),
    connectionHops: p.string().list(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    state: p.enum('ChannelStates'),
  }),
}));